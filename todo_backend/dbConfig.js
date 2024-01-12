const config = {
  user: "sa",
  password: "Welcome@12345",
  server: "ALP-4974\\SQLEXPRESS",
  database: "todo_database",
  port: 49395,
  options: {
    trustServerCertificate: true,
    trustConnection: false,
    enableArithAbort: true,
  },
  driver: "msnodesqlv8",
};
module.exports = config;
