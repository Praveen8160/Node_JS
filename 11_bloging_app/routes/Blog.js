const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const blog = require("../models/blog");
const Comment = require("../models/comment");

router.get("/Addblog", (req, res) => {
  return res.render("Add_Blog", {
    user: req.user,
  });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./Public/uploads/"));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("Cover_Image"), async (req, res) => {
  if (!req.user)
    return res.render("signin", {
      error: "please login your account",
    });

  const { title, body } = req.body;
  const blogvalue = await blog.create({
    title,
    body,
    createdBy: req.user._id,
    coverImageURL: `/uploads/${req.file.filename}`,
  });
  console.log(blogvalue);
  return res.redirect(`/blog/${blogvalue._id}`);
});

router.get("/:id", async (req, res) => {
  const singleblog = await blog.findById(req.params.id).populate("createdBy");
  const All_comments = await Comment.find({}).populate("createdBy");
  console.log(singleblog);
  res.render("blog", {
    user: req.user,
    singleblog,
    All_comments,
  });
});
router.post("/comments/:id", async (req, res) => {
  const content = req.body.comment;
  const blogId = req.params.id;
  const createdBy = req.user._id;
  const comment = await Comment.create({
    content,
    blogId,
    createdBy,
  });
  console.log(comment);
  return res.redirect(`/blog/${req.params.id}`);
});
module.exports = router;
