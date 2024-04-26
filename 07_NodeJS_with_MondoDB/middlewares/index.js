function middleware1() {
  return (req, res, next) => {
    console.log("i am middleware1"); // making middleware for specific route
    next();
  };
}

function middleware2() {
  return (req, res, next) => {
    console.log(req.headers);
    console.log("i am middleware2"); // making middleware for specific route
    next();
  };
}

function middleware3(){
  return (req,res,next)=>{
    console.log(req.ip)
    next()
  }
}
module.exports = {
  middleware1,
  middleware2,
  middleware3
};
