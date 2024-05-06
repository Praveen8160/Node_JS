const mongoose = require("mongoose");
async function connection() {
 await mongoose
    .connect(`${process.env.MONGO_DB}`)
    .then(() => console.log(`Database connected`))
    .catch((err) => console.log(`Error on connecting the database ${err}`));
}

module.exports=connection;
