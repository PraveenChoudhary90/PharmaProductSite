const express = require("express");
const route = express.Router();
const CustomerController = require("../Controller/CustomerController");


route.post("/customerInsert", CustomerController.customerInsert);








module.exports = route;