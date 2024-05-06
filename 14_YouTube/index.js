require("dotenv").config();
const app = require("./app.js");
const connection = require("./src/db/connection.js");

// dotenv.config({
//   path: "./env",
// });
console.log(process.env.MONGO_DB);
connection()
  .then(() => {
    app.listen(process.env.PORT || 8000, () =>
      console.log(`server is running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(`Error on connecting the database ${err}`));
