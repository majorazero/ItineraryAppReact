module.exports = (app) => {
  app.get("/api/login",(req,res)=>{
    console.log("Hello");
    res.json("Hit!");
  })
};
