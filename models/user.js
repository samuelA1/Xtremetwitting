const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const deepPopulate = require('mongoose-deep-populate')(mongoose);



const UserSchema = new Schema({
    firstName: {type: String, unique: true, lowercase: true},
    lastName: {type: String, unique: true, lowercase: true},
    username: {type: String, unique: true},
    email: {type: String, unique: true, lowercase: true},
    password: String,
    picture: String,
    tweets: [{type: Schema.Types.ObjectId, ref: 'Tweet'}],
    following: [{type: Schema.Types.ObjectId, ref: 'User'}],
    followers: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

UserSchema.pre('save', function(next) {
    var  user = this;
    if(!user.isModified('password')) return next()

    bcrypt.hash(user.password, null, null, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    })
})


UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

UserSchema.methods.gravatar = function(size) {
    if (!this.size) size = 200;
    if (!this.email) {
      return 'https://gravatar.com/avatar/?s' + size + '&d=retro';
    } else {
      var md5 = crypto.createHash('md5').update(this.email).digest('hex');
      return 'https://gravatar.com/avatar/' + md5 + '?s' + size + '&d=retro'; 
    }
}

UserSchema.plugin(deepPopulate);
module.exports = mongoose.model('User', UserSchema);
