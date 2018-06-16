const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
var Camp = mongoose.model('Camp');


router.get('/',(req, res) => {
  Camp.find({}, (err,followers) => {
    if(err) return res.status(500).send(err)
    return res.send(followers)
  })
});


router.get('/:id', (req, res) => {
  const {id} = req.params;
  Camp.findOne({_id:id}, (err,follower) => {
    if(err) return res.status(500).send(err)
    return res.send(follower)
  })
});

router.post('/', (req,res) => {
  const {camp} = req.body;
  Camp.create(camp,function(err,camp){
    if(err){ return res.status(500).send(err)}
    return res.send(camp);
  })
})


module.exports = router;