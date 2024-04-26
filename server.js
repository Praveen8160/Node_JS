const http=require('http');
const port=3000;
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plan'});
    res.end('hello');
})
server.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})