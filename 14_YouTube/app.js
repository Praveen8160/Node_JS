const express = require("express");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true })); //for intrect between front-backend
app.use(express.json({ limit: "16kb" })); //for accept json data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieparser());

//import Router
const UserRouter = require("./src/router/user.router.js");

//router
app.use("/user", UserRouter);
module.exports = app;
