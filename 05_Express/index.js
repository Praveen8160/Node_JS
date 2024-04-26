const express=require("express")
const fs=require("fs")
const app=express()
const port=8000
app.get("/",(req,res)=>{
    res.end("hello world")
})
app.get("/signup",(req,res)=>{
    fs.readFile('form.html','utf8',(err,data)=>{
        if(err)
        {
            res.write("file not loading")
        }
        else{
            res.write(data)
            app.get("/home",(req,res)=>{
                res.end(`successfully login \n your name is ${req.query.username} \n your password is ${req.query.password}`)
            })
        }
        })
    })
app.listen(port,console.log(`server start on http://localhost:${port}`))