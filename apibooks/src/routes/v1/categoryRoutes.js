const categoryRoutes = require("express").Router();
const categoryController = require("../../controllers/categoryController")

categoryRoutes.get("/",categoryController.getAllCategories)


module.exports = categoryRoutes;