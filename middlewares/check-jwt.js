const jwt = require('jsonwebtoken');
const config = require('../config');


module.exports = function(req, res, next) {
 const token = req.headers["authorization"];

 if (token) {
     jwt.verify(token, config.secret, function(err, decoded) {
         if (err) {
             res.json({
                 success: false,
                 message: 'Invalid user or password'
             })
         } else {
             req.decoded = decoded;
             next();
         }
     })
 } else {
     res.status(403).json({
         succes: false,
         message: 'Login to tweet'
     })
 }
}