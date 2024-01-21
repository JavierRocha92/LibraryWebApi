const apiRoutes = require("express").Router();
const categoryRoutes= require("./categoryRoutes")
const bookRoutes= require("./bookRoutes")
const authorRoutes= require("./authorRoutes")

apiRoutes.use("/v1/categories",categoryRoutes)
apiRoutes.use("/v1/books",bookRoutes)
apiRoutes.use("/v1/authors",authorRoutes)


module.exports = apiRoutes;