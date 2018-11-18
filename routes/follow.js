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

router.get('/followers/following/:id', checkJwt, (req, res, next) => {
    var userId = req.params.id;
    var following = [];
    var followers = [];
    User.findOne({_id: userId})
    .populate('following')
    .populate('followers')
    .exec((err, user) => {
        if (err) return next(err);

        user.following.forEach(elt => {
            following.push({
                _id: elt._id,
                username: elt.username,
                firstName: elt.firstName,
                lastName: elt.lastName,
                picture: elt.picture,
                following: elt.following,
                followers: elt.followers,
                tweets: elt.tweets
            })
        })

        user.followers.forEach(elt => {
            followers.push({
                _id: elt._id,
                username: elt.username,
                firstName: elt.firstName,
                lastName: elt.lastName,
                picture: elt.picture,
                following: elt.following,
                followers: elt.followers,
                tweets: elt.tweets
            })
        })

        for (let i = 0; i < followers.length; i++) {
            if(filter(followers[i])) {
                Object.assign(followers[i], {both: true})
            } else {
                Object.assign(followers[i], {both: false})
            }
            
        }

        function filter(e) {
             return following.some((u) => {
                  return u.username == e.username
            })
        }


        res.json({
            success:true,
            following: following,
            followers: followers
        })
    })
})

router.get('/suggestions', checkJwt, (req, res, next) => {

    async.parallel([
        function(callback) {
            User.find({})
            .select(['username', 'picture', 'firstName', 'lastName'])
            .exec((err, filteredUsers) => {
                if (err) return next(err);

                var loggedUserId = req.decoded.user._id;
                var allUsers;
               allUsers =  filteredUsers.filter(u => u._id !=loggedUserId )

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
        let following = [];
        const allUsers = results[0];
        const loggedUser = results[1];

        loggedUser.following.forEach(elt => {
            following.push({
                _id: elt._id,
                firstName: elt.firstName,
                lastName: elt.lastName,
                username: elt.username,
                picture: elt.picture
            })
        })

        function comparer(otherArray){
            return function(current){
              return otherArray.filter(function(other){
                return other.username == current.username 
              }).length == 0;
            }
          }
          
          var onlyInA = allUsers.filter(comparer(following));
          var onlyInB = following.filter(comparer(allUsers));
          
          const suggestions = onlyInA.concat(onlyInB);


        
        res.json({
            suggestions: suggestions
        })
    })
})

module.exports = router;