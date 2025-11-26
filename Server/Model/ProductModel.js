const mongoose = require("mongoose");
const ProductSchema =new mongoose.Schema({
      category: String,
      subCategory: String,
      productname: String,
      brand: String,
      mrp: Number,
      price: Number,
      batchNo: String,
      mfgDate: String,
      expDate: String,
      defaultImage:String,
      image:[String]



});


module.exports = mongoose.model("Product", ProductSchema);