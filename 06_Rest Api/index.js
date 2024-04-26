const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const port = 8000;

const app = express();
//middleware
app.use(express.urlencoded({ extended: false }));

app.use((req,res,next)=>{
  console.log("hello")
  next()
})

const middleware1=(req,res,next)=>{
  console.log("i am middleware1")// making middleware for specific route
  next()
}

const middleware2=(req,res,next)=>{
  console.log(req.headers)
  console.log("i am middleware2")// making middleware for specific route
  next()
}

app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/users",middleware1, (req, res) => {
  console.log(req.headers)
  res.setHeader('X-myname','hello')
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get(middleware2,(req, res) => {
    let id = Number(req.params.id);
    const user = users.filter((user) => user.id === id);
    return res.json(user);
  })
  .delete(middleware1,middleware2,(req, res) => {       // Apply middleware to specific routes
    let id = Number(req.params.id);
    const user = users.filter((user) => user.id != id);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err, data) => {
      return res.json({ status: "panding" });
    });
  })
  .patch((req, res) => {
    let id = Number(req.params.id);
    let newdata = { id: id, ...req.body };
    const updatdata = users.map((data) => (data.id === id ? newdata : data));
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatdata), (err, data) => {
      return res.json({ status: "panding" });
    });
  });

app.post("/api/users", (req, res) => {
  if(!req.body||!req.body.first_name||!req.body.last_name||!req.body.email||!req.body.gender||!req.body.job_title) return res.status(400).json("enter all values")
  const body = { id: users.length + 1, ...req.body };
  users.push(body);
  // console.log(users);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "panding" });
  });
});
// app.get("/api/users/:id",(req,res)=>{
//     let id=Number(req.params.id);
//     const user=users.filter((user)=>user.id===id );
//     return res.json(user)
// })
app.listen(port, console.log(`server started on http://localhost:${port}`));
