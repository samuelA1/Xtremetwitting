const router = require('express').Router();
const User = require('../models/user');
const Tweet = require('../models/tweet');
const checkJwt = require('../middlewares/check-jwt');
const async = require('async');
const _ = require('underscore');

router.get('/users', checkJwt, (req, res, next) => {
    const perPage = 10;
    const page = req.query.page;
    User.find({})
    .limit(perPage)
    .skip(perPage * page)
    .select(['username', 'picture', 'firstName', 'lastName'])
    .exec((err, user) => {
        if (err) return next(err);

        res.json({
            success:true,
            user: user
        })
    })
})


router.get('/user/:id', checkJwt, (req, res, next) => {
    const userId = req.params.id;
    User.findOne({_id: userId})
    .populate('tweets')
    .exec((err, user) => {
        if (err) return next(err);

        const numberFollowers = user.followers.length;
        const numberFollowing = user.following.length;
        res.json({
            success: true,
            user: user,
            tweets: user.tweets.sort( function ( a, b ) { return b.dateTweeted - a.dateTweeted; } ),
            numFollowers: numberFollowers,
            numFollowing: numberFollowing
        })
    })
})

router.route('/tweet')
    .post(checkJwt, (req, res, next) => {
        async.waterfall([
            function (callback) {
                User.findById({_id: req.decoded.user._id}, (err, user) => {
                    callback(err, user)
                })
            },
            function(user) {
                var tweet = new Tweet();
                var tweetId;
                if (req.body.tweet) tweet.tweet = req.body.tweet;
                tweet.owner = user._id;
                user.tweets.push(tweet._id);
                tweetId = tweet._id;
    
                user.save();
                tweet.save();
                res.json({
                    success: true,
                    tweetId: tweetId
                })
    
            }
        ])
    })
    .get(checkJwt, (req, res, next) => {
        const page = req.query.page;
        const perPage = 5
        User.findOne({_id: req.decoded.user._id})
        .populate('tweets')
        .skip(perPage * page)
        .limit(page)
        .exec((err, user) => {
            if (err) return next(err);

            res.json({
                success: true,
                bio: user.profile.bio,
                location: user.profile.location,
                tweets: user.tweets
            })
        })
    })

    router.delete('/tweet/:id',checkJwt, (req, res, next) => {
        const tweetId = req.params.id;
        async.waterfall([
            function(callback) {
                User.findOne({_id: req.decoded.user._id}, (err, loggedInUser) => {
                    callback(err, loggedInUser)
                })
            }, function(loggedInUser) {
               Tweet.findByIdAndRemove({_id: tweetId}, (err) => {
                if (err) {
                    res.json({
                        success: false,
                        message: 'Tweet does not exist'
                    })
                } else {
                const index = loggedInUser.tweets.indexOf(tweetId);
                loggedInUser.tweets.splice(index, 1);
                loggedInUser.save();
                 res.json({
                     success: true,
                     message: 'Tweet deleted'
                 })
                }
            })
            }
        ])
    })

    // Get tweets of followed users
    router.get('/recent', checkJwt, (req, res, next) => {
        User.findOne({_id: req.decoded.user._id})
        .populate('following')
        .deepPopulate('following.tweets.owner')
        // .sort({_id: -1})
        .exec((err, user) => {
            if (err) next(err);

            var result = [];
            for(var i=0; i<user.following.length; i++)
                result = result.concat(user.following[i].tweets);
                res.json({
                    success: true,
                    tweets: result.sort( function ( a, b ) { return b.dateTweeted - a.dateTweeted; } )
                })            
            })
            
        })

        router.get('/userRecent', checkJwt, (req, res, next) => {
            User.findOne({_id: req.decoded.user._id})
            .populate('tweets')
            .deepPopulate('tweets.owner')
            .exec((err, user) => {
                if (err) return next(err);

                res.json({
                    success: true,
                    tweets: user.tweets.sort( function ( a, b ) { return b.dateTweeted - a.dateTweeted; } )
                })

            })
        })

        

module.exports = router;