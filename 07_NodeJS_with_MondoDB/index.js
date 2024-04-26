const express = require("express");
const port = 8000;
const userRouter=require("./routes/user")
const app = express();
const {connectMongoDB}=require("./connection")

// mongodb connection
connectMongoDB("mongodb://127.0.0.1:27017/user-information").then(()=>console.log("mongoDB connected"))

//middleware
app.use(express.urlencoded({ extended: false }));
// app.use(middleware3)

//router
app.use("/users",userRouter)

app.listen(port, console.log(`server started on http://localhost:${port}`));
