const express = require("express");
const router = express.Router();
var sql = require("mssql");
const db = require("../models/db");
router.get("/book", async (req, res) => {
  // return res.json(data);
  var request = db.request();
  await request.query(
    "select * from todo order by value desc",
    function (err, recordset) {
      if (err) console.log(err);
      return res.json(recordset.recordsets[0]);
    }
  );
});
// async  function  getuser(userid) {
//   try {
//     // let  pool = await  sql.connect(config);
//     let  product = await  db.request()
//     .input('userid', sql.Int, userid)
//     .query("select * from todo where userid=@userid order by value desc",);
//     return  product.recordsets;
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

router.post("/books", async (req, res) => {
  // const book = req.body;

  // //   console.log(book);
  // data.push(book);
  // console.log(Number(req.body.selected));
  // console.log(req.body);

  try {
    // let pool = sql.connect(config);
    // let insertProduct = pool
    //   .request()

    var request = db.request();
    request.input("id", sql.Int, req.body.id);
    request.input("name", sql.VarChar, req.body.name);
    request.input("value", sql.VarChar, req.body.value);
    request.input("date", sql.VarChar, req.body.date);
    request.input("starttime", sql.VarChar, req.body.starttime);
    request.input("endtime", sql.VarChar, req.body.endtime);
    request.input("selected", sql.Int, req.body.selected);
    request.input("userid", sql.Int, req.body.userid);
    const q =
      "insert into todo(name,value,date,starttime,endtime,selected,userid) values(@name,@value,@date,@starttime,@endtime,@selected,@userid)";
    await request.query(q, function (err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  } catch (err) {
    console.log(err);
  }
});

router.put("/id", async (req, res) => {
  // console.log(req.body);
  // book = data;

  // book.forEach((element) => {
  //   if (element.id === req.body.id) {
  //     element.name = req.body.name;
  //     element.value = req.body.value;
  //     element.date = req.body.date;
  //     element.starttime = req.body.starttime;
  //     element.endtime = req.body.endtime;
  //   }
  // });
  // //   book[req.body.id].name = req.body.name;
  // //   book[req.body.id].value = req.body.value;
  // //   book[req.body.id].date = req.body.date;
  // //   book[req.body.id].starttime = req.body.starttime;
  // //   book[req.body.id].endtime = req.body.endtime;
  // //   data.push(book);
  // data = book;
  // return res.json(data);

  try {
    // console.log(req.body);
    var request = db.request();
    request.input("id", sql.Int, req.body.id);
    request.input("name", sql.VarChar, req.body.name);
    request.input("value", sql.VarChar, req.body.value);
    request.input("date", sql.VarChar, req.body.date);
    request.input("starttime", sql.VarChar, req.body.starttime);
    request.input("endtime", sql.VarChar, req.body.endtime);
    request.input("selected", sql.Int, req.body.selected);
    request.input("userid", sql.Int, req.body.userid);
    const q =
      "update todo set name=@name,value=@value,date=@date,starttime=@starttime,endtime=@endtime,selected=@selected,userid=@userid where id=@id";
    await request.query(q, function (err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  } catch (err) {
    console.log(err);
  }
});
// app.get("/", (req, res) => {
//   res.send("Hello World, from express");
// });

router.delete("/delet/:id", async (req, res) => {
  try {
    var request = db.request();
    request.input("id", sql.Int, Number(req.params.id));
    const q = "delete from todo where id=@id";
    await request.query(q, function (err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  } catch (err) {
    console.log(err);
  }
});
// book = data;

// book.forEach((element) => {
//   // console.log(typeof element.id);
//   // console.log(typeof req.body.id);
//   if (element.id === Number(req.params.id)) {
//     book.pop(element);
//   }
// });
// data = book;
// return res.json(data);
// // // console.log(book);
// // // console.log(req.params.id);
// // book.filter((element) => element.id !== Number(req.params.id));
// // console.log(book);
// // return res.json("deleted");
// // // console.log(book.filter((element) => element.id === req.body.id));

module.exports = router;
