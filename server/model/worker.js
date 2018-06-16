var mongoose = require('mongoose');


var workerSchema = mongoose.Schema({
  firstname: String,
  lastname : String,
  number: String,
  nationality: String,
  workerType: String
});

module.exports = mongoose.model('Worker', workerSchema);

// Sample data
// {
//   "firstname": "เกรียงไกร",
//   "lastname" : "แกร่งกล้า",
//   "id": "123457",
//   "number":"0829851212",
//   "nationality": "Thai",
//   "followers":["fol124125"," fol14123"],
//   "workerType":"ช่างไม้"
// }