const express = require("express");
const cors = require("cors");
const routes = require("./Router/Router");
const routes_1 = require("./Router/Router_user");
const app = express();
const port = 8000;
require("./models/db");
// Where we will keep books
// dbOperation.getData().then((res) => {
//   console.log(res);
// });
app.use(express.json());
app.use(cors());
app.use("/", routes);
app.use("/", routes_1);
app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
