const saveToDataBase = require("../bd/bd");
const db = require("../bd/books.json");
const { v4: uuid } = require("uuid");

const getAllBooks = () => {
  return db.books;
};

const booksByCategory = (category) => {
  const books = db.books;
  const booksbycategory = books.filter((book) => book.category == category);
  return booksbycategory;
};

const booksByAuthor = (author) => {
  console.log(author);
  const books = db.books;
  const booksbyauthor = books.filter((book) => book.author == author);
  return booksbyauthor;
};

const createBook = (book) => {
  book = { id: uuid(), ...book };
  const books = db.books;
  books.unshift(book);
  saveToDataBase({ books: books });
  return book;
};

const deleteBook = (idbook) => {
  const books = db.books;
  const newbooks = books.filter((book) => book.id != idbook);
  const deletedbook = books.filter((book) => book.id == idbook);
  saveToDataBase({ books: newbooks });
  return deletedbook[0];
};

module.exports = {
  getAllBooks,
  booksByCategory,
  booksByAuthor,
  deleteBook,
  createBook,
};
