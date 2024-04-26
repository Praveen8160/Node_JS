const Url = require("../models/url");
const shortid = require("shortid");
async function generateshorturl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url required" });
  const shortId = shortid();
  const userid = req.user.id;
  console.log(userid);
  await Url.create({
    ShortId: shortId,
    redirecturl: body.url,
    visitHistory: [],
    createdBy: req.user.id,
  });
  const allurl = await Url.find({ createdBy: userid });
  console.log(allurl);
  return res.render("home", {
    id: shortId,
    URL: allurl,
  });
  // return res.json({ id: shortId });
}

async function handleredirecturl(req, res) {
  const shortid = req.params.shortId;
  const entryurl = await Url.findOneAndUpdate(
    {
      ShortId: shortid,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    {
      returNewDocument: true,
    }
  );
  return res.redirect(entryurl.redirecturl);
}

async function handleclickanalytics(req, res) {
  const shortid = req.params.shortId;
  const click = await Url.findOne({ ShortId: shortid });
  return res.json({ totalclick: click.visitHistory.length });
}

async function deleteurl(req, res) {
  await Url.findByIdAndDelete(req.params.id);
  const userid = req.user.id;
  const allurl = await Url.find({ createdBy: userid });
  return res.render("home", {
    URL: allurl,
  });
}
module.exports = {
  generateshorturl,
  handleredirecturl,
  handleclickanalytics,
  deleteurl,
};
