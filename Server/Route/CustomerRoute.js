const express = require("express");
const route = express.Router();
const multer = require('multer');
const path = require('path');
const CustomerController = require("../Controller/CustomerController");


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






route.post("/customerInsert", CustomerController.customerInsert);
route.post("/customerLogin", CustomerController.customerLogin);
route.post("/KycCustomer",upload.single("image"), CustomerController.KycCustomer);
route.post("/AdminKycStatus",CustomerController.AdminKycStatus);






module.exports = route;