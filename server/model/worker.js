var mongoose = require('mongoose');


var workerSchema = mongoose.Schema({
  firstname: String,
  lastname : String,
  number: String,
  nationality: String,
  workerType: String
});

module.exports = mongoose.model('Worker', workerSchema);