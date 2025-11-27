const express  =require("express");
const route = express.Router();
const multer = require('multer');
const path = require('path');
const AdminController = require("../Controller/AdminController");
const MRController  =require("../Controller/MrController");
const UserController = require("../Controller/UserController");




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
route.get("/DisplayProduct", AdminController.DisplayProduct);
route.post("/DeleteProduct",AdminController.DeleteProduct);
route.post("/UpdateGetData", AdminController.UpdateGetData);
route.post("/UpdateProduct",upload.array("defaultImage", 10), AdminController.UpdateProduct);
route.post("/MrInsert", upload.single("image"), MRController.MrInsert)
route.post("/UserInsert", upload.single("image"), UserController.UserInsert)
route.get("/DisplayMR", MRController.DisplayMR);
route.get("/DisplayUser", UserController.DisplayUser);
route.post("/MrDelete", MRController.MrDelete);
route.post("/mrgetupdatedata", MRController.mrgetupdatedata);
route.post("/handelupdateMr",upload.single("image"), MRController.handelupdateMr);







module.exports = route;