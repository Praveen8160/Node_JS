const cluster = require("cluster");
const express = require("express");
const os = require("os");
const cpulength = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`this is primary cluster ${process.pid}`);
  for (let index = 0; index < cpulength; index++) {
    cluster.fork();
  }
} else {
  console.log(`this is not primary cluster ${process.pid}`);
  const app = express();
  const port = 8000;
  app.get("/", (req, res) => {
    return res.end(`message:hello express server ${process.pid}`);
  });
  app.get("/slow", (req, res) => {
    for (let index = 0; index < 90000000; index++) {}
    return res.end(`message:slow express server ${process.pid}`);
  });
  app.listen(port, () =>
    console.log(`http://localhost:${port} ${process.pid}`)
  );
}
