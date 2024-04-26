const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser=require("cookie-parser")
const { connectionmongo } = require("./connection");
const{checkAuthentication,restrictTo}=require("./Middlewares/auth")
const port = 9000;


const userrouter = require("./routes/user");
const router = require("./routes/url");
const staticRoutes = require("./routes/staticRoutes");

//connection
connectionmongo("mongodb://localhost:27017/short-url");

//connect ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(checkAuthentication)

//routes
app.use("/url",restrictTo(["NORMAL","Admin"]),router);
app.use("/user", userrouter);
app.use("/",staticRoutes);

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
