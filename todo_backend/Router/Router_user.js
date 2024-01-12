const express = require("express");
const router1 = express.Router();
var sql = require("mssql");
const db = require("../models/db");
router1.post("/sort", async (req, res) => {
  // console.log(req.body);
  var request = db.request();
  request.input("email", sql.VarChar, req.body.email);
  // return res.json(data);

  await request.query(
    "SELECT todo.name,todo.value,todo.date,todo.starttime,todo.endtime,todo.selected FROM todo INNER JOIN [dbo].[user] ON todo.userid = [dbo].[user].id where email=@email",
    function (err, recordset) {
      if (err) console.log(err);
      return res.json(recordset.recordset);
    }
  );
});

module.exports = router1;
