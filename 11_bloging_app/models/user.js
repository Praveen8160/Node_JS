const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { setusertoken } = require("../service/authentication");
const Userschema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "/Images/defult.jpeg",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

Userschema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  this.password = hashedPassword;
  this.salt = salt;
  next();
});

Userschema.static("matchpassword", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("user is not valid");

  const salt = user.salt;
  const hashedPassword = user.password;

  const userhashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if (hashedPassword !== userhashedPassword)
    throw new Error("password is not correct");

  const token = setusertoken(user);
  // console.log(token);
  return token;
});
const UserModel = mongoose.model("user", Userschema);
module.exports = UserModel;
