const mongoose = require("mongoose");
const UrlSchema = mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirecturl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const UrlModel=mongoose.model("DiscodeUrl",UrlSchema)

module.exports=UrlModel
