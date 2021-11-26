var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "AnwarSR",
  password: "password",
  database: "laravel_rms",
});

con.connect(function (error) {
  if (error) throw error;
  con.query("select * from users", function (err, result) {
    if (err) throw err;
    console.log("all results are here", result);
  });
});
