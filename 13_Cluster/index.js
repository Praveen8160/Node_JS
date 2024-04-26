const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  return res.end(`message:hello express server ${process.pid}`);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
