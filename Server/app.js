const express  =require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
// const bodyParser =require("body-parser");
const path = require('path'); 
const AdminRoute = require("./Route/AdminRoute");
const CustomerRoute = require("./Route/CustomerRoute");
const ProductAttribute = require("./Route/ProductAttributeRoute");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Parse incoming requests with JSON payloads
// app.use(bodyParser);
// Parse incoming requests with urlencoded payloads
// app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.CONNECTION).then(()=>{
   console.log("DB IS CONNECTED")
})


app.use("/admin", AdminRoute);
app.use("/customer",CustomerRoute);
app.use("/product", ProductAttribute)

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server is running on ${port} port`)
})