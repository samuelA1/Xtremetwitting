const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config')


router.post('/register', (req, res, next) => {
    let user = new User();

    if (req.body.firstName) user.firstName = req.body.firstName;
    if (req.body.lastName) user.lastName = req.body.lastName;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = req.body.password;
    if (req.body.username) user.username = req.body.username;
    user.picture = user.gravatar();

    User.findOne({email: req.body.email}, (err, userExist) => {
        if (userExist) {
            res.json({
                success: false,
                message: ' Sorry, a user with that email already exist. Try another email.'
            })
        } else {
            user.save();
            const token = jwt.sign({user: user}, config.secret, {expiresIn: '7d'})
            res.json({
                success: true,
                message: 'Registration successsful',
                token: token
            });
        }
    })
});

router.post('/login', (req, res, next) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) return next(err);

        if (user) {
            let passwordConfirmed = user.comparePassword(req.body.password);

            if (passwordConfirmed) {
                const token = jwt.sign({user: user}, config.secret, {expiresIn: '7d'});
                res.json({
                    success: true,
                    message: 'Successfully logged in',
                    token: token
                })
            } else {
                res.json({
                    success: false,
                    message: 'Password not correct'
                })
            }
        } else {
            res.json({
                success: false,
                message: 'Wrong email or password provided'
            })
        }
    })
})

module.exports = router;