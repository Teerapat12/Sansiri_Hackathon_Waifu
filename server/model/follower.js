var mongoose = require('mongoose');
var fakegoose = require('fakegoose');

var followerSchema = mongoose.Schema({
  title: {
    type:String,
    fake:'name.prefix'
  },
  fname: {
    type:String,
    fake:'name.firstName'
  },
  lname : {
    type:String,
    fake:'name.lastName'
  },
  dob: {
    type:String,
    fake:'date.past'
  },
  number: {
    type:String,
    fake:'phone.phoneNumber'
  },
  age: {
    type:String,
    fake:'random.number'
  },
  nationality: {
    type:String,
    fake:'address.country'
  },
  gender: {
    type:String,
    default:'male'
  },
  learnInThai: {
    type:Boolean,
    fake:'random.boolean'
  },
  followingWorker: {type: mongoose.Schema.Types.ObjectId, ref: 'Worker'},
  school:{
    level:{type:String, default:"อ-ต้น"},
    year:String,
    name:String,
    inCountry: {
      type:Boolean,
      fake:'random.boolean'
    },
    isNormal: {
      type:Boolean,
      fake:'random.boolean'
    },
    inGoodSpace: {
      type:Boolean,
      fake:'random.boolean'
    }
  }
});

followerSchema.plugin(fakegoose);
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

