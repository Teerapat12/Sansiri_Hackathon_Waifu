const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
var Worker = mongoose.model('Worker');

router.get('/',(req, res) => {
  Worker.find({}, (err,workers) => {
    if(err) return res.status(500).send(err)
    return res.send(workers)
  })
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  Worker.findOne({id}, (err, worker) => {
    if(err) return res.status(500).send(err)
    return res.send(worker)
  })
});

router.post('/', (req,res) => {
  const {worker} = req.body;
  Worker.create(worker,function(err,worker){
    if(err){ return res.status(500).send(err)}
    return res.send(worker);
  })
})


module.exports = router;