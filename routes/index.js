var express = require("express");
var router = express.Router();

/*To display the home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Project Management Application" });
});

module.exports = router;
