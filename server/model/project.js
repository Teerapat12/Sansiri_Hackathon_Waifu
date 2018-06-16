var mongoose = require('mongoose');
var fakegoose = require('fakegoose');

var projectSchema = mongoose.Schema({
  engname: {
    type:String,
    fake:'name.firstName'
  },
  thname: {
    type:String,
    fake:'name.firstName'
  },
  province: {
    type:String,
    fake:'address.state'
  } ,
  startProj: {
    type:Date,
    fake:'date.past',
  },
  endProj: {
    type:Date,
    fake:'date.past',
  },
  projManagerContact:{
    name: {
      type:String,
      fake:'name.firstName'
    },
    phone: {
      type:String,
      fake:'phone.phoneNumber'
    },
    email: {
      type:String,
      fake:'internet.email'
    }
  }
});

projectSchema.plugin(fakegoose);
module.exports = mongoose.model('Project', projectSchema);