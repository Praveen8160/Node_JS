const file=require("fs")

//                                                    write file


// file.writeFile("new.txt","hello",(err)=>{
//     if(err) return "err"
// })

// file.writeFileSync("new.txt","hello,,,",(err)=>{
//         if(err) return "err"
//     })



//                                                     read file


// const data=file.readFile("ne.txt",'utf8',(err,data)=>{ //readFile not return any data
//     if(err) return "err"
//     return data
// })
// console.log(data)


// const data=file.readFileSync("new.txt",'utf8',(err,data)=>{ //readFileSync return data
//     if(err) return "err"
//     return data
// })
// console.log(data)


//                                                     append file

// file.appendFile("ne.txt","update\n",(err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// })

// file.appendFileSync("ne.txt","update\n",(err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// })

//                                                     open file
// file.open("new.txt","w",(err,data)=>{
//     if(err) console.log(err) 
//     return console.log(data)
// })

//                                                     rename file

// file.rename("ne.txt","new1.txt",(err)=>{
//     if(err) return console.log("error")
//     console.log("done")
// })

// file.renameSync("ne.txt","new1.txt",(err)=>{
//     if(err) return console.log("error")
//     console.log("done")
// })



//                                                delete file

// file.unlink("ne.txt", function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

const os=require("os")
console.log(os.cpus())

