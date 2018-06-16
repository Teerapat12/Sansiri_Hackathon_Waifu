const express = require('express');
const router = express.Router();
const workers = require('../fake_data/workers.json')


router.get('/',(req, res) => {

  res.status(200).json(workers)
});


router.get('/:id', (req, res) => {
  res.status(200).json(workers[0])
});


module.exports = router;