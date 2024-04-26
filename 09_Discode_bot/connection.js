const mongoose = require("mongoose");
async function DatabaseConnection(url) {
  return mongoose.connect(url).then(() => console.log("cmongoDB connected"));
}
module.exports = DatabaseConnection;
