// const sessionid=new Map() //statefull
const jwt = require("jsonwebtoken");
const secret = "praveen#6@8@8#*";
function setuser(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
  // sessionid.set(id,user)  //statefull
  // console.log(sessionid)
}
function getuser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setuser,
  getuser,
};
