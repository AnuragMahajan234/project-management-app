var express = require("express");
var mysql = require("mysql");
var mysqlCon = require("../databaseConnection");
var router = express.Router();

//Get the list of the projects
router.get("/", (req, res) => {
  mysqlCon.query("SELECT * FROM projects", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

//Get specific project by id
router.get("/:id", (req, res) => {
  mysqlCon.query(
    "SELECT * FROM projects WHERE id=?",
    [req.params.id],
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

//Delete a existing project
router.delete("/:id", (req, res) => {
  mysqlCon.query(
    "DELETE FROM projects WHERE id=?",
    [req.params.id],
    (err, results, fields) => {
      if (err) throw err;
      res.status(200).send("Success!! Project is Deleted ");
    }
  );
});

//Create a new project
router.post("/", (req, res) => {
  var project = req.body;
  mysqlCon.query(
    "INSERT INTO projects SET ?",
    project,
    (err, results, fields) => {
      if (err) throw err;
      res.send(req.body);
    }
  );
});

//Update a existing project
router.put("/", (req, res) => {
  mysqlCon.query(
    "UPDATE projects SET projectName=?, scrumMaster=?, teamMembers=? WHERE id=?",
    [req.body.projectName, req.body.scrumMaster, req.body.teamMembers, req.body.id],
    (err, results, fields) => {
      if (err) throw err;
      res.end("Success!! Project is Updated");
    }
  );
});

module.exports = router;
