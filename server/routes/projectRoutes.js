const express = require('express');
const router = express.Router();
const projects = require('../fake_data/projects.json')


router.get('/',(req, res) => {

  res.status(200).json(projects)
});


router.get('/:id', (req, res) => {
  res.status(200).json(projects[0])
});


module.exports = router;