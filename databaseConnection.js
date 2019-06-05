var mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pmadb"
});
mysqlConnection.connect(function(err) {
  if (err) throw err;
  console.log("Success!! Database Connected!!");
});

module.exports = mysqlConnection;
