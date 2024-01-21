const fs = require("fs");

const saveToDataBase=(newbooks)=>{
  fs.writeFileSync("./src/bd/books.json",JSON.stringify(newbooks,null,2),{
    encoding:"utf-8"
  })

}
module.exports = saveToDataBase;