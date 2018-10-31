const router = require('express').Router();
const User = require('../models/user');
const Tweet = require('../models/tweet');
const checkJwt = require('../middlewares/check-jwt');
const async = require('async');
const _ = require('underscore');

router.post('/follow/:id', checkJwt, (req, res, next) => {
    async.waterfall([
        function(callback) {
            User.findOne({_id: req.decoded.user._id}, (err, loggedInUser) => {
                callback(err, loggedInUser)
            })
        },
        function(loggedInUser) {
            User.findOne({_id: req.params.id}, (err, user) => {
                if (err) return next(err);

                loggedInUser.following.push(user._id);
                user.followers.push(loggedInUser._id)
                user.save();
                loggedInUser.save()

                res.json({
                    success: true,
                    message: 'User followed'
                })
            })
        }
    ])
})

router.post('/unfollow/:id', checkJwt, (req, res, next) => {
    async.waterfall([
        function(callback) {
            User.findOne({_id: req.decoded.user._id}, (err, loggedInUser) => {
                callback(err, loggedInUser)
            })
        },
        function(loggedInUser) {
            User.findOne({_id: req.params.id}, (err, user) => {
                if (err) return next(err);

                const indexFollowing = loggedInUser.following.indexOf(req.params.id)
                loggedInUser.following.splice(indexFollowing, 1)
                const indexFollower = user.followers.indexOf(req.params.id)
                user.followers.splice(indexFollower, 1)
            
                user.save();
                loggedInUser.save()

                res.json({
                    success: true,
                    message: 'User unfollowed'
                })
            })
        }
    ])
})

router.get('/followers/following', checkJwt, (req, res, next) => {
    const following = {};
    const followers = {};
    User.findOne({_id: req.decoded.user._id})
    .populate('following')
    .populate('followers')
    .exec((err, user) => {
        if (err) return next(err);

        user.following.forEach(elt => {
            Object.assign(following, {
                username: elt.username,
                firstName: elt.firstName,
                lastName: elt.lastName,
                picture: elt.picture
            })
        })

        user.followers.forEach(elt => {
            Object.assign(followers, {
                username: elt.username,
                firstName: elt.firstName,
                lastName: elt.lastName,
                picture: elt.picture
            })
        })


        res.json({
            success:true,
            following: [following],
            followers: [followers]
        })
    })
})

module.exports = router;