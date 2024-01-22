// class Book {
//   constructor(id, title, author, category, content, cover, url_download) {
//       this._id = id;
//       this._title = title;
//       this._author = author;
//       this._category = category; 
//       this._content = content; 
//       this._cover = cover; 
//       this._url_download=url_download;
//   }

//   get id() {
//       return this._id;
//   }
//   set id(id) {
//       this._id = id;
//   }

//   get title() {
//       return this._title;
//   }
//   set title(title) {
//       this._title = title;
//   }

//   get author() {
//       return this._author;
//   }
//   set author(author) {
//       this._author = author;
//   }

//   get category() {
//       return this._category;
//   }
//   set category(category) {
//       this._category = category;
//   }

//   get content() {
//       return this._content;
//   }
//   set content(content) {
//       this._content = content;
//   }

//   get cover() {
//       return this._cover;
//   }
//   set cover(cover) {
//       this._cover = cover;
//   }

//   get url_download() {
//       return this._url_download;
//   }
//   set url_download(url_download) {
//       this._url_download = url_download;
//   }
// }

// export default Book;

/**
 * Represents a book with various attributes such as title, author, category, etc.
 */
class Book {
    /**
     * Constructor for the Book class.
     * @param {string} id - The unique identifier of the book.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {string} category - The category to which the book belongs.
     * @param {string} content - The content or description of the book.
     * @param {string} cover - The cover image URL of the book.
     * @param {string} url_download - The URL for downloading the book.
     */
    constructor(id, title, author, category, content, cover, url_download) {
      this._id = id;
      this._title = title;
      this._author = author;
      this._category = category;
      this._content = content;
      this._cover = cover;
      this._url_download = url_download;
    }
  
    /**
     * Gets the unique identifier of the book.
     * @returns {string} - The unique identifier of the book.
     */
    get id() {
      return this._id;
    }
  
    /**
     * Sets the unique identifier of the book.
     * @param {string} id - The unique identifier of the book.
     */
    set id(id) {
      this._id = id;
    }
  
    /**
     * Gets the title of the book.
     * @returns {string} - The title of the book.
     */
    get title() {
      return this._title;
    }
  
    /**
     * Sets the title of the book.
     * @param {string} title - The title of the book.
     */
    set title(title) {
      this._title = title;
    }
  
    /**
     * Gets the author of the book.
     * @returns {string} - The author of the book.
     */
    get author() {
      return this._author;
    }
  
    /**
     * Sets the author of the book.
     * @param {string} author - The author of the book.
     */
    set author(author) {
      this._author = author;
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
  
    /**
     * Gets the content or description of the book.
     * @returns {string} - The content or description of the book.
     */
    get content() {
      return this._content;
    }
  
    /**
     * Sets the content or description of the book.
     * @param {string} content - The content or description of the book.
     */
    set content(content) {
      this._content = content;
    }
  
    /**
     * Gets the cover image URL of the book.
     * @returns {string} - The cover image URL of the book.
     */
    get cover() {
      return this._cover;
    }
  
    /**
     * Sets the cover image URL of the book.
     * @param {string} cover - The cover image URL of the book.
     */
    set cover(cover) {
      this._cover = cover;
    }
  
    /**
     * Gets the URL for downloading the book.
     * @returns {string} - The URL for downloading the book.
     */
    get url_download() {
      return this._url_download;
    }
  
    /**
     * Sets the URL for downloading the book.
     * @param {string} url_download - The URL for downloading the book.
     */
    set url_download(url_download) {
      this._url_download = url_download;
    }
  }
  
  // Export the Book class
  export default Book;
  