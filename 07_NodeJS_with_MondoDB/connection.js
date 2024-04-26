const mongoose = require("mongoose");
// mongodb connection
// mongoose.connect("mongodb://127.0.0.1:27017/user-information").then(()=>console.log("mongodb connected")).catch((err)=>console.log("mongo error",err))
async function connectMongoDB(url) {
  return await mongoose.connect(url);
}
module.exports = {
  connectMongoDB,
};
