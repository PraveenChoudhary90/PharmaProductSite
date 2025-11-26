const mongoose = require("mongoose");
const MRSchema =new mongoose.Schema({

      name: String,
      email: String,
      number: Number,
      ano: Number,
      image:String,
     status: {
     type: String,
     enum: ["pending", "approved", "blocked"],
     default: "approved"
  }




});


module.exports = mongoose.model("MR", MRSchema);