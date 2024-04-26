const mongoose=require("mongoose");

//create schema
const userschema=new mongoose.Schema({
    firstname:{
      type:String,
      required:true,
    },
    lastname:{
      type:String,
    },
    email:{
      type:String,
      required:true,
      unique:true,
    },
    jobtitle:{
      type:String,
    },
    gender:{
      type:String
    }
  },{timestamps:true})
  

  //create model
  const usermodel=mongoose.model("userinfo",userschema)
  
  module.exports=usermodel;