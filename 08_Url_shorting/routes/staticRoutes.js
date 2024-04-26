const express = require("express");
const router = express.Router();
const { restrictTo } = require("../Middlewares/auth");
const urls = require("../models/url");

router.get("/", restrictTo(["NORMAL","Admin"]), async (req, res) => {
  // if(!req.user) return res.redirect("/signin")
  const userid = req.user.id;
  const allurl = await urls.find({ createdBy: userid });
  res.render("home", {
    URL: allurl,
  });
});

router.get("/admin",restrictTo(["Admin"]), async (req, res) => {
  // const userid = req.user.id;
  const allurl = await urls.find({});
  res.render("home", {
    URL: allurl,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/signin", (req, res) => {
  return res.render("signin");
});
module.exports = router;
