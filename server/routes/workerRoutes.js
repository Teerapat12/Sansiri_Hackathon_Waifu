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

router.put('/movecamp/:id', (req,res) => {
  const {camp} = req.body;
  const {id} = req.params;
  console.log(id);
  Worker.findOne({_id:id}, (err,worker) => {
    if(err) return res.status(500).send(err)
    if(!worker) return res.status(404).send("Not found")
    const {currentCamp} = worker;
    // Put the currentCamp (will be old) into camp
    if(currentCamp !== null)
      worker.camp.push(currentCamp);

    //Update current camp
    worker.currentCamp = camp;
    worker.save((err) => {
      if(err) res.status(500).send(err)
      return res.status(200).send("Success")
    })
  })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  Worker.findOne({_id:id}, (err, worker) => {
    if(err) return res.status(500).send(err)
    if(!worker) return res.status(404).send("Not found")
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