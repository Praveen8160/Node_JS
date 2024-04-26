const { getusertoken } = require("../service/authentication");

function CheckAuthenticationCookie(cookie) {
  return (req, res, next) => {
    const tokancookie = req.cookies[cookie];
    if (!tokancookie) {
      return next();
    }
    try {
      const userpayload = getusertoken(tokancookie);
      req.user = userpayload;
    } catch (error) {}
    return next();
  };
}

module.exports = {
  CheckAuthenticationCookie,
};
