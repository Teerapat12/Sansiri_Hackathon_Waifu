var mongoose = require('mongoose');


var campSchema = mongoose.Schema({
  address: String,
  province: String,
  project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
});

module.exports = mongoose.model('Camp', campSchema);