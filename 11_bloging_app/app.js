require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const UserRouter = require("./routes/user");
const cookieParser = require("cookie-parser");
const BlogRouter = require("./routes/Blog");
const blogs = require("./models/blog");
const { CheckAuthenticationCookie } = require("./middleware/authentication");
const port = process.env.PORTS;


mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongoDB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(CheckAuthenticationCookie("token"));
app.use(express.static(path.resolve("./Public")));
app.get("/", async (req, res) => {
  const All_blog = await blogs.find({});
  res.render("homepage", {
    user: req.user,
    Allblogs: All_blog,
  });
});

app.use("/blog", BlogRouter);
app.use("/user", UserRouter);

app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);
