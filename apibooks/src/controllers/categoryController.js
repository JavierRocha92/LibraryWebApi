const categoryService = require("../services/categoryService")


const getAllCategories = (req,res) => {
  const allCategories = categoryService.getAllCategories()
  res.json (allCategories)
}

module.exports= {
  getAllCategories
}