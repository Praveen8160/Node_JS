const http=require("http");
const fs=require("fs");
const port=8000;
const myserver=http.createServer((req,res)=>{
    fs.readFile('index.html','utf8',(err,data)=>{
        if(err)
        {
            res.end("file not loading")
        }
        else{
            res.end(data)
        }
    })
})
myserver.listen(port,()=>console.log(`server is running at http://localhost:${port}`))