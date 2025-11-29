
const express = require("express");
const route = express.Router();
const ProductAttributeController= require("../Controller/ProductAttributeController");




route.post("/AttributeInsert", ProductAttributeController.AttributeInsert);
route.get("/AttributeDisplay", ProductAttributeController.AttributeDisplay);
route.post("/SubAttributeInsert", ProductAttributeController.SubAttributeInsert);
route.get("/SubAttributeDisplay", ProductAttributeController.SubAttributeDisplay);














module.exports=route;