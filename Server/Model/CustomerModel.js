
const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    city:String,
    password:String
})



module.exports = mongoose.model("customer", CustomerSchema);