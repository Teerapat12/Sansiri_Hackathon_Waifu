var mongoose = require('mongoose');


var followerSchema = mongoose.Schema({
  title: String,
  fname: String,
  lname : String,
  dob: Date,
  number: String,
  age: Number,
  nationality: String,
  gender: String,
  followingWorker: {type: mongoose.Schema.Types.ObjectId, ref: 'Worker'}
});

module.exports = mongoose.model('Follower', followerSchema);