var express = require("express");
var app = express();

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviehub"
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // con.query("CREATE DATABASE moviehub", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });

  // var sql =
  //   "CREATE TABLE movies (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), cover VARCHAR(255),des VARCHAR(255), rating INT , time VARCHAR(255),image VARCHAR(255))";
  // con.query(sql, function(err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
});

app.get("/home", function(req, res) {
  // res.json("Hello man!");
  con.query("SELECT * FROM movies ", function(err, req) {
    if (err) throw err;
    res.json(req);
  });
});

app.post("/api/view/:id", (req, res) => {
  con.query(`SELECT * FROM movies WHERE id = ${req.params.id}`, function(
    err,
    result
  ) {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3001, () => console.log("Port running on"));
