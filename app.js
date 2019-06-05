var express = require("express");
var cookieParser = require("cookie-parser");
var createError = require("http-errors");
var logger = require("morgan");
var path = require("path");
var indexRouter = require("./routes/index");
var projectsJsonRouter = require("./routes/projectsJson");
var projectsDatabaseRouter = require("./routes/projectDatabase");

var app = express();

//Configuration for View engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/projectsJson", projectsJsonRouter);
app.use("/projectsDb", projectsDatabaseRouter);

//To Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//Error handler with error response
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
