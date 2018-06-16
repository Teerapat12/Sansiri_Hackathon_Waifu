const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
var Follower = mongoose.model('Follower');


router.get('/',(req, res) => {
  Follower.find({}, (err,followers) => {
    if(err) return res.status(500).send(err)
    return res.send(followers)
  })
});


router.get('/:id', (req, res) => {
  const {id} = req.params;
  Follower.findOne({id}, (err,follower) => {
    if(err) return res.status(500).send(err)
    return res.send(follower)
  })
});

router.post('/', (req,res) => {
  const {follower} = req.body;
  Follower.create(follower,function(err,follower){
    if(err){ return res.status(500).send(err)}
    return res.send(follower);
  })
})

router.get('/reset', (req,res) => {
  Follower.remove({},function(err){
    if(err){ return res.status(500).send(err)}
    return res.send(true);
  })
})


module.exports = router;