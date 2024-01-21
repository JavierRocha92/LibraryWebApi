const bookRoutes = require("express").Router();

const bookController = require("../../controllers/bookController");

bookRoutes.get("/", bookController.getAllBooks);
bookRoutes.get("/category/:category", bookController.getBooksByCategory);
bookRoutes.get("/author/:author", bookController.getBooksByAuthor);
bookRoutes.post("/", bookController.createBook);
bookRoutes.delete("/:idbook", bookController.deleteBook);

module.exports = bookRoutes;
