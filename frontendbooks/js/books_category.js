class BooksCategory {
  constructor(book, category) {
      this._book = book;
      this._category = category;
  }

  get book() {
      return this._book;
  }
  set book(book) {
      this._book = book;
  }

  get category() {
      return this._category;
  }
  set category(category) {
      this._category = category;
  }

  convertIntoRow(){
    const tr = document.createElement('TR')
    const tdTitle = document.createElement('TD')
    tdTitle.textContent = this._book.title
    const tdAuthor = document.createElement('TD')
    tdAuthor.textContent = this._book.author
    const tdCategory = document.createElement('TD')
    tdCategory.textContent = this._category.name
    tr.appendChild(tdTitle)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdCategory)
    return tr
  }
}

export default BooksCategory;