const express = require("express");
const {
  generateshorturl,
  handleredirecturl,
  handleclickanalytics,
  deleteurl
} = require("../controllers/url");
const router = express.Router();
router.post("/", generateshorturl);
router.get("/delete/:id",deleteurl)
router.get("/:shortId", handleredirecturl);
router.get("/analytics/:shortId", handleclickanalytics);

module.exports = router;
