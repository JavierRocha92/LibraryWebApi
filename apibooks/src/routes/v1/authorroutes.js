const authorRoutes = require("express").Router();

const authorController = require("../../controllers/authorController")

authorRoutes.get("/",authorController.getAllAuthors)


module.exports = authorRoutes;