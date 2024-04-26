const { getuser } = require("../service/auth");

async function checkAuthentication(req, res, next) {
  const userid = req.cookies?.uid;
  if (!userid) return next();

  const user = getuser(userid);
  // if(!user) return res.redirect("/signin")

  req.user = user;
  return next();
}

function restrictTo(roles = []) {
  // const userid=req.cookies?.uid;
  // const user=getuser(userid)
  // req.user=user
  // next()

  return function (req, res, next) {
    if (!req.user) return res.redirect("/signup");
    console.log(req.user.role);
    if (!roles.includes(req.user.role)) return res.end("unauthorized");

    return next()
  };
}

module.exports = {
  checkAuthentication,
  restrictTo,
};
