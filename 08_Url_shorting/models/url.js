const mongoose = require("mongoose");

const urlschema = mongoose.Schema(
  {
    ShortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirecturl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"users"
    }
  },
  { timestamps: true }
);

const url = mongoose.model("url", urlschema);

module.exports = url;
