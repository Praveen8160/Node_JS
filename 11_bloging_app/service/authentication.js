const jwt = require("jsonwebtoken");
const secret = "blog#6@8@8#*";

function setusertoken(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      profileImage: user.profileImage,
      role: user.role,
    },
    secret
  );
}
function getusertoken(token) {
  if (!token) return null;
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}
module.exports = {
  setusertoken,
  getusertoken,
};
