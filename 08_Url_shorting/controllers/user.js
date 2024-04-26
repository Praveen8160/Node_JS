const User = require("../models/user");
// const {v4:uuidv4}=require("uuid")
const {setuser}=require("../service/auth")
async function handlesignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  return res.redirect("./signin");
}
async function handlesignin(req, res) {
  const { email, password } = req.body;
  const users = await User.findOne({ email: email, password: password });
  if (!users) return res.redirect("/signin");
  const token=setuser(users)
  res.cookie("uid",token)
  return res.redirect("/");
}
module.exports = {
  handlesignup,
  handlesignin,
};
