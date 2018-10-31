const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    tweet: {type: String},
    dateTweeted: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Tweet', TweetSchema);