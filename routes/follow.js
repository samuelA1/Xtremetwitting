const router = require('express').Router();
const User = require('../models/user');
const checkJwt = require('../middlewares/check-jwt');
const async = require('async');
const _ = require('underscore');
const arrayDiffer = require('array-differ');


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

router.get('/suggestions', checkJwt, (req, res, next) => {

    async.parallel([
        function(callback) {
            User.find({})
            .select(['username', 'picture', 'firstName', 'lastName'])
            .exec((err, allUsers) => {
                if (err) return next(err);

                callback(err, allUsers)
            })
        },
        function(callback) {
            User.findOne({_id: req.decoded.user._id})
            .populate('following')
            .exec((err, loggedUser) => {
                callback(err, loggedUser)
            })
        }
            
    ], function(err, results) {
        let following = {};
        const allUsers = results[0];
        const loggedUser = results[1];
        let suggestions = []

        loggedUser.following.forEach(elt => {
            Object.assign(following, {
                _id: elt._id,
                firstName: elt.firstName,
                lastName: elt.lastName,
                username: elt.username,
                picture: elt.picture
            })
        })
        following = [following]

        // function comparer(otherArray){
        //     return function(current){
        //       return otherArray.filter(function(other){
        //         return other.username == current.username 
        //       }).length == 0;
        //     }
        //   }
          
        //   var onlyInA = allUsers.filter(comparer(following));
        //   var onlyInB = following.filter(comparer(allUsers));
          
        //   const suggestions = onlyInA.concat(onlyInB);

        allUsers.forEach((item) => {
            if (name(item)) {
                suggestions.push(item)
            } else {
                console.log('false')
            }
        })

        function name(params) {
            for (let i = 0; i < following.length; i++) {
                if (following[i].username != params.username) {
                    return true
                }else {
                    return false
                }
                
            }
        }

        
        res.json({
            // following: following,
            // allUsers: allUsers
            suggestions: suggestions
        })
    })
})

module.exports = router;