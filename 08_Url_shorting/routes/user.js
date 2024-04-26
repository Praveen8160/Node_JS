const express = require("express");
const router = express.Router();
const { handlesignin, handlesignup } = require("../controllers/user");
router.post("/", handlesignup);
router.post("/signin", handlesignin);
module.exports = router;
