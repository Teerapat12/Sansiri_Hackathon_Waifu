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

// Sample Data
// {
//   "title":"ดร.",
//   "fname": "Allen",
//   "lname" : "Walker",
//   "dob": "12/12/2005",
//   "number":"0829851212",
//   "age":"13",
//   "nationality": "Thai",
//   "gender":"ชาย",
//   "followingWorker": "idhere"
// }