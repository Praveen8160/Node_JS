const http=require("http")
const fs=require("fs")
const url=require("url")
const port=8000
let count=0
const myserver=http.createServer((req,res)=>{
    if(req.url=="/favicon.ico") return res.end()
    count=count+1;
    let link=url.parse(req.url,true)
    console.log()
    let data=`${Date.now()},${req.method},${link.pathname} ,Request${count} \n`
    fs.appendFile('new.txt',data,(err)=>{
        if(err) console.log(err)
    })
    switch(link.pathname){
        case "/" :
            res.write("hello,")
            res.end("home page")
            break;
        case "/about":
            let name=link.query.name
            res.end("i am "+name)
            break;
        case "/contact":
            let id=link.query.id
            res.end("my id is"+id)
            break;
        case "/signup":
            fs.readFile('form.html','utf8',(err,data)=>{
                if(err)
                {
                    res.write("file not loading")
                }
                else{
                    res.write(data)
                    if(req.method==="GET") res.end("this is signup form");
                    else if(req.method==="POST") {
                    res.end("success");
                }
                }
            })
            break;
        default:
            res.end("invalid url")
    }
})
myserver.listen(port,()=>console.log(`server started http://localhost:${port}`))