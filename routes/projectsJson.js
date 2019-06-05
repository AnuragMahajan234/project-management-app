var express = require("express");
var router = express.Router();

var projects = [
  {
    id: 1,
    name: "Core Java Project",
    scrumMaster: "Anurag Mahajan",
    teamMembers: 4
  },
  {
    id: 2,
    name: "Spring 4 Project",
    scrumMaster: "Himanshu Dixit",
    teamMembers: 8
  }
];

//get the list of the projects
router.get("/", function(req, res) {
  res.send(projects);
});

//get specific project by id
router.get("/:id", function(req, res) {
  const project = projects.find(pro => pro.id === parseInt(req.params.id));
  if (!project) {
    res.status(404).send("The project not found with given id.");
    return;
  }
  res.send(project);
});

//Delete a existing project
router.delete("/:id", function(req, res) {
  const project = projects.find(pro => pro.id === parseInt(req.params.id));
  if (!project) {
    res.status(404).send("The project not found with given id.");
    return;
  }
  const index = projects.indexOf(project);
  projects.splice(index, 1);
  res.send(project);
});

//Create a new project
router.post("/", function(req, res) {
  const project = {
    id: 1 + projects.length,
    name: req.body.name,
    scrumMaster: req.body.scrumMaster,
    teamMembers: req.body.teamMembers
  };
  projects.push(project);
  res.send(project);
});

//Update a existing project
router.put("/:id", function(req, res) {
  const project = projects.find(pro => pro.id === parseInt(req.params.id));
  if (!project) {
    res.status(404).send("The project not found with given id.");
    return;
  }
  project.name = req.body.name;
  project.scrumMaster = req.body.scrumMaster;
  project.teamMembers = req.body.teamMembers;
  res.send(project);
});

module.exports = router;
