const express = require('express');
const router = express.Router();
const projects = require('../fake_data/projects.json')

var mongoose = require('mongoose');
var Project = mongoose.model('Project');


router.get('/',(req, res) => {
  Project.fake({},function(err, projects){
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

router.post('/', (req,res) => {
  const {project} = req.body;
  Project.create(project, (err,project) => {
    if(err) return res.status(500).send(err)
    return res.status(200).send(project)
  })
})


module.exports = router;