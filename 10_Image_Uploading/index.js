const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const port = 9000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    return cb(null, `${Date.now()} - ${file.originalname}`);
  },
});

const upload = multer({ storage: storage }); //middleware
// const upload = multer({ dest: 'uploads/' })

app.use(express.json());

app.get("/", (req, res) => {
  return res.render("users");
});

app.post("/upload", upload.single("photo"), (req, res) => {
  //   console.log(req.file, req.body);
  return res.redirect("/");
});
app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
