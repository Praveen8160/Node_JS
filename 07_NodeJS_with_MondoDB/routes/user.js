const express = require("express");
const { middleware1, middleware2 } = require("../middlewares/index");
const {
  GetAllUser,
  GetUserById,
  UpdateUserById,
  DeleteUserById,
  AddNewUser,
} = require("../controllers/user");
const router = express.Router();
// const app=express()

// router.get("/", async (req, res) => {
//     const user=await usermodel.find({})
//     const html = `
//       <ul>
//           ${user.map((user) => `<li> username is ${user.firstname} and email is ${user.email}</li>`).join("")}
//       </ul>
//       `;
//     res.send(html);
//   });

router.route("/").get(middleware1(), GetAllUser).post(AddNewUser);

router
  .route("/:id")
  .get(middleware2(), GetUserById)
  .delete(middleware1(), middleware2(), DeleteUserById)
  .patch(UpdateUserById);

module.exports = router;
