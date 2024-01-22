// class BooksCategory {
//   constructor(book, category) {
//       this._book = book;
//       this._category = category;
//   }

//   get book() {
//       return this._book;
//   }
//   set book(book) {
//       this._book = book;
//   }

//   get category() {
//       return this._category;
//   }
//   set category(category) {
//       this._category = category;
//   }

  
// }


/**
 * Represents a mapping between a book and its corresponding category.
*/
class BooksCategory {
    /**
     * Constructor for the BooksCategory class.
     * @param {string} book - The title or name of the book.
     * @param {string} category - The category to which the book belongs.
    */
   constructor(book, category) {
       this._book = book;
       this._category = category;
    }
    
    /**
     * Gets the book associated with the category.
     * @returns {string} - The title or name of the book.
    */
   get book() {
       return this._book;
    }
    
    /**
     * Sets the book associated with the category.
     * @param {string} book - The title or name of the book.
    */
   set book(book) {
       this._book = book;
    }
    
    /**
     * Gets the category to which the book belongs.
     * @returns {string} - The category of the book.
    */
   get category() {
       return this._category;
    }
    
    /**
     * Sets the category to which the book belongs.
     * @param {string} category - The category of the book.
    */
   set category(category) {
       this._category = category;
    }
}

// Export the BooksCategory class

export default BooksCategory;