const express = require('express');
const router = express.Router();
const projects = require('../fake_data/projects.json')

var mongoose = require('mongoose');
var Project = mongoose.model('Project');


router.get('/',(req, res) => {
  Project.find({},function(err, projects){
    if(err) {return res.status(500).send("Error")}
    return res.status(200).json(projects)
  })
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  Project.findOne({_id:id},function(err, project){
    if(err) {return res.status(500).send("Error")}
    return res.status(200).json(project)
  })
});

router.post('/', (req,res) => {
  const {project} = req.body;
  Project.create(project, (err,project) => {
    if(err) return res.status(500).send(err)
    return res.status(200).send(pxeroject)
  })
})


module.exports = router;