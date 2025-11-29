const express =require("express");
const route = express.Router();
const AdminContoller = require("../Controller/AdminController");

route.post("/admininsert",AdminContoller.AdminInsert);
route.post("/adminlogin",AdminContoller.AdminLogin);






module.exports = route;