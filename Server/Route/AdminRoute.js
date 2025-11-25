const express  =require("express");
const route = express.Router();
const multer = require('multer');
const path = require('path');
const AdminController = require("../Controller/AdminController");




// Configure storage engine and filename
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload middleware and add file size limit
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 } // 1MB file size limit
})



route.post("/InsertAdmin", AdminController.InsertAdmin);
route.post("/AdminLogin", AdminController.AdminLogin);
route.post("/InsertProduct",upload.array("image", 10) ,AdminController.ProductInsert);







module.exports = route;