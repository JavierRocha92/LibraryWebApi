const authorService = require("../services/authorService")

const getAllAuthors = (req,res) => { 
  const allAuthors = authorService.getAllAuthors();
  res.json(allAuthors) 
}


module.exports = {
  getAllAuthors,

}