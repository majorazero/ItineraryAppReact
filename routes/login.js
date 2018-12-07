const db = require("../models");
const encryption = require("../helper/encrypt.js");

module.exports = (app) => {
  app.post("/api/login",(req,res)=>{
    db.User.find({email:req.body.email}).then((data)=>{
      if(data.length === 0){
        res.json("No such user!");
      }
      else{
        res.json(data[0].token);
      }
    }).catch((err)=>{
      res.json(err);
    });
  })

  app.post("/api/register",(req,res)=>{
    db.User.find({email:req.body.email}).then(data => {
      if(data.length !== 0){
        res.json(false);
      }
      else{
        db.User.create({
          email: req.body.email,
          password: req.body.password,
          token: encryption.encrypt(req.body.email,req.body.password)
        }).then(()=>{
          res.json(true);
        });
      }
    });
  })
};
