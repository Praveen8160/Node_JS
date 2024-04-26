const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/signin", (req, res) => {
  res.render("signin");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  const { fullname, email, password } = req.body;
  await User.create({
    fullname,
    email,
    password,
  });
  return res.redirect("/");
});
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchpassword(email, password);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect email and password",
    });
  }
});
router.get("/logout", (req, res) => {
  return res.clearCookie("token").redirect("/");
});

module.exports = router;
