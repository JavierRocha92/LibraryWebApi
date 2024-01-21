const db = require("../bd/authors.json");

const getAllAuthors = () => {
  
  return db.authors;
};

module.exports = {
  getAllAuthors,
};