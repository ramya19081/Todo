const config = require("./dbConfig");
const sql = require("mssql");
// //
// async () => {
//   try {
//     // make sure that any items are correctly URL encoded in the connection string
//     await sql.connect(
//       "Server=ALP-4974\\SQLEXPRESS,1433;Database=todo_database;User Id=sa;Password=Welcome@12345;Encrypt=true"
//     );
//     const result = await sql.query("select * from todo");
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// const getData = async () => {
//   try {
//     let pool = await sql.connect(config);
//     let data = pool.request.query("select * from todo");
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
const db = sql.connect(config, function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Database connected");

  var request = new sql.Request();
  request.query("select * from todo", function (err, recordSet) {
    if (err) {
      console.log(err);
    } else {
      console.log(recordSet);
    }
  });
});

// module.exports = {
//   getData,
// };

// // sql.connect(config, function (err) {
// //   if (err) {
// //     console.log(err);
// //   }
// //   var request = new sql.Request();
// //   request.query(
// //     "select * from todo",
// //     "todo_database",
// //     function (err, recordSet) {
// //       if (err) {
// //         console.log(err);
// //       } else {
// //         console.log(recordSet);
// //       }
// //     }
// //   );
// // });
