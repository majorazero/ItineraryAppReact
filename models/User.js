const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: {
    type: String,
    require: "You need to have an email!",
    unique: true
  },
  password: {
    type: String,
    require: "You need a password!"
  }
});

module.exports = mongoose.model("User",UserSchema);
