const Url = require("../models/url");
async function RedirectUrl(req, res) {
  const shortid = req.params.shortId;
  const data = await Url.findOne({ shortId: shortid });
  if (!data) return res.end("short id path is invalid");
  return res.redirect(data.redirecturl);
}
module.exports = {
  RedirectUrl,
};
