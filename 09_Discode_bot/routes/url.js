const expess = require("express");
const router = expess.Router();
const { RedirectUrl } = require("../controllers/Url");

router.get("/", (req, res) => {
  res.end("make your short url");
});
router.get("/:shortId", RedirectUrl);
module.exports = router;
