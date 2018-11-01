const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    tweet: {type: String},
    dateTweeted: {type: Date, default: new Date().toISOString().slice(0, 10)}
})

module.exports = mongoose.model('Tweet', TweetSchema);