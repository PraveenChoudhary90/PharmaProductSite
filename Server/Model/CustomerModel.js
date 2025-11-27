
const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    city:String,
    password:String,
   status: {
     type: String,
     enum: ["pending", "approved", "blocked"],
     default: "pending"
  }
})



module.exports = mongoose.model("customer", CustomerSchema);