var sql = require("mssql");

// config for your database
var config = require("../dbConfig");

const db = sql.connect(config, function (err) {
  if (err) console.log(err);
  console.log("Database connected");
});
module.exports = db;
