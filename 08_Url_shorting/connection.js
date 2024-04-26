const mongoose = require("mongoose");
async function connectionmongo(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("mogoDB connected"))
    .catch((err) => console.log("error", err));
}
module.exports = {
  connectionmongo,
};
