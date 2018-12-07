module.exports = (app) => {
  app.get("/api/login",()=>{
    console.log("Hello");
    res.json("Hit!");
  })
};
