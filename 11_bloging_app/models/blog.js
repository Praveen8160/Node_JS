const mongoose = require("mongoose");

const blogschema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  coverImageURL: {
    type: String,
    required: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const blog = mongoose.model("blog", blogschema);

module.exports = blog;
