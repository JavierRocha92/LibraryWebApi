const bookService = require("../services/bookService")

const getAllBooks = (req,res) => { 
  const allBooks = bookService.getAllBooks();
  res.json(allBooks) 
}

const getBooksByCategory = (req,res) => { 
  const booksByCategory = bookService.booksByCategory(req.params.category);
  res.json(booksByCategory) 
}

const getBooksByAuthor = (req,res) => { 
  const booksByAuthor = bookService.booksByAuthor(req.params.author);
  res.json(booksByAuthor) 
}

const createBook = (req,res) => { 
  console.log("llega al controller")
  console.log(req.body)
  const createdBook = bookService.createBook(req.body);
  res.status(200).json(createdBook) 
}

const deleteBook = (req,res) => { 
  const deletedBook = bookService.deleteBook(req.params.idbook);
  res.status(200).json(deletedBook) 
}

module.exports = {
  getAllBooks,
  getBooksByCategory,
  getBooksByAuthor,
  deleteBook,
  createBook,
}