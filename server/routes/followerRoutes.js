const express = require('express');
const router = express.Router();
const followers = require('../fake_data/followers.json')


router.get('/',(req, res) => {

  res.status(200).json(followers)
});


router.get('/:id', (req, res) => {
  res.status(200).json(followers[0])
});


module.exports = router;