const express = require("express");
const Router = express.Router();
const {
  UserRegisterhandler,
  UserLoginhandler,
  UserLogouthandler,
} = require("../controller/user.controller.js");
const upload = require("../middlewares/multer.middleware.js");
const verifyJWT = require("../middlewares/auth.middleware.js");

Router.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  UserRegisterhandler
);

Router.post("/Login", UserLoginhandler);
Router.post("/Logout", verifyJWT, UserLogouthandler);

module.exports = Router;
