const router = require('express').Router();
const User = require('../models/user');
const checkJwt = require('../middlewares/check-jwt');

router.route('/profile')
    .post(checkJwt, (req, res, next) => {
        User.findOne({_id: req.decoded.user._id}, (err, user) => {
            if (err) return next(err);

            if(req.body.firstName) user.firstName = req.body.firstName;
            if(req.body.lastName) user.lastName = req.body.lastName;
            if(req.body.bio) user.profile.bio = req.body.bio;
            if(req.body.location) user.profile.location = req.body.location;
            if(req.body.website) user.profile.website = req.body.website;
            user.save()
            res.json({
                success: true,
                message: 'Profile updated'
            })
        })
    })
module.exports = router;