const express = require('express');
const router = express.Router();
const projects = require('../fake_data/projects.json')

var mongoose = require('mongoose');
var Project = mongoose.model('Project');


router.get('/',(req, res) => {
  Project.fake({limit:20},function(err, projects){
    if(err) {return res.status(500).send("Error")}
    return res.status(200).json(projects)
  })
});

router.get('/:id', (req, res) => {
  Project.fakeOne({},function(err, project){
    if(err) {return res.status(500).send("Error")}
    return res.status(200).json(project)
  })
});


module.exports = router;