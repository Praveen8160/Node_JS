const usermodel = require("../models/user");
async function GetAllUser(req, res) {
  const user = await usermodel.find({});
  console.log("req.headers");
  res.setHeader("X-myname", "hello");
  return res.json(user);
}
async function GetUserById(req,res){
    const users=await usermodel.findById(req.params.id)
    if(!users) return res.status(404)
    return res.json(users);
}
async function UpdateUserById(req,res){
    const updatdata=await usermodel.findByIdAndUpdate(req.params.id,{firstname:"karan"})
    return res.json(updatdata);
}
async function DeleteUserById(req,res){
    const deletedata=await usermodel.findByIdAndDelete(req.params.id)
    return res.json(deletedata);
}
async function AddNewUser(req,res){
    if(!req.body||!req.body.first_name||!req.body.last_name||!req.body.email||!req.body.gender||!req.body.job_title) return res.status(400).json("enter all values")
    const body = req.body
    const New_User=await usermodel.create({
      firstname:body.first_name,
      lastname:body.last_name,
      email:body.email,
      gender:body.gender,
      jobtitle:body.job_title
    })
      console.log("result",New_User)
    return res.status(201).json({status:"success",id:New_User._id})
}
module.exports={
    GetAllUser,
    GetUserById,
    UpdateUserById,
    DeleteUserById,
    AddNewUser,
}
