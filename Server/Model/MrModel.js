const mongoose = require("mongoose");
const MRSchema =new mongoose.Schema({

      name: String,
      email: Number,
      number: Number,
      ano: String,
      image:String,
     status: {
     type: String,
     enum: ["pending", "approved", "blocked"],
     default: "approved"
  }




});


module.exports = mongoose.model("MR", MRSchema);