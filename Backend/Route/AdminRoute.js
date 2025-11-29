const express =require("express");
const route = express.Router();
const AdminContoller = require("../Controller/AdminController");
const auth = require("../MiddleWare/auth");
const AdminModel = require("../Model/AdminModel");

route.post("/admininsert",AdminContoller.AdminInsert);
route.post("/adminlogin",AdminContoller.AdminLogin);


route.get("/admin/profile", auth, async (req, res) => {
    const admin = await AdminModel.findById(req.admin.id);
    res.json(admin);
});





module.exports = route;