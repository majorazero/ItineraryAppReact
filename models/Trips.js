const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let TripSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    require: true
  },
  trips: [{
    type: Schema.Types.ObjectId,
    ref: "Business"
  }]
});

module.exports = mongoose.model("Trip",TripSchema);
