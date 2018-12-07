const mongoose = require("mongoose");

let Schema = mongoose.Shema;

let BusinessSchema = new Schema({
  Name: {
    type: String,
    require: "You need to have a name!",
    unique: true
  },
  Address: {
    type: String,
    require: "You need an address!"
  }
});

module.exports = mongoose.model("Business",BusinessSchema);
