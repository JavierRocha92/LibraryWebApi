// //Import
// import functions from './functions.js'

// class Shower {
//   constructor() {

//   }
//   // Crear un libro
//   createCardBook = (book) => {
//     let card = document.createElement("ARTICLE");
//     card.classList.add("book");

//     // img
//     let img = document.createElement("IMG");
//     img.classList.add("book__img");
//     img.src = book._cover;
//     card.appendChild(img);

//     // section
//     let section = document.createElement("SECTION");
//     section.classList.add("book__textos");
//     card.appendChild(section);

//     // span ttítulo
//     let span = document.createElement("SPAN");
//     span.classList.add("book__texto");
//     span.textContent = "Título: ";
//     section.appendChild(span);

//     // span
//     span = document.createElement("SPAN");
//     span.textContent = book._title;
//     section.appendChild(span);

//     //br
//     let br = document.createElement("BR");
//     section.appendChild(br);

//     // span autor
//     span = document.createElement("SPAN");
//     span.classList.add("book__texto");
//     span.textContent = "Autor: ";
//     section.appendChild(span);

//     //span
//     span = document.createElement("SPAN");
//     span.textContent = book._author;
//     section.appendChild(span);

//     //br
//     br = document.createElement("BR");
//     section.appendChild(br);

//     // span autor
//     span = document.createElement("SPAN");
//     span.classList.add("book__texto");
//     span.textContent = "Categoría: ";
//     section.appendChild(span);

//     //span
//     span = document.createElement("SPAN");
//     span.textContent = book._category;
//     section.appendChild(span);

//     //br
//     br = document.createElement("BR");
//     section.appendChild(br);

//     span = document.createElement("SPAN");
//     span.classList.add("book__texto");
//     span.textContent = "Descripción: ";
//     section.appendChild(span);
//     //br
//     br = document.createElement("BR");
//     section.appendChild(br);

//     // section
//     let sectioncontent = document.createElement("SECTION");
//     section.classList.add("book__textos");
//     card.appendChild(sectioncontent);

//     // span content
//     span = document.createElement("SPAN");
//     span.textContent = book._content;
//     section.appendChild(span);

//     //button
//     let button = document.createElement("BUTTON");
//     button.classList.add("book__btnborrar");
//     button.id = book._id;
//     button.textContent = "Eliminar";
//     section.appendChild(button);

//     return card;
//   };

//   createLogRow(action) {
//     console.log(action.method)
//     const tr = functions.createElement('TR', [])

//     const puser = functions.createElement('P',[], action.username)
//     const tduser = functions.createElement('TD')
//     tduser.appendChild(puser)

//     const pmethod = functions.createElement('P',[], action.method)
//     const tdmethod = functions.createElement('TD')
//     tdmethod.appendChild(pmethod)

//     let ppath

//     if(action.method == 'GET'){
//       console.log('entro')
//       ppath = functions.createElement('A',[], action.path, false, false, action.path)

//     }else{
//       ppath = functions.createElement('P',[], action.path)

//     }

//     const tdpath = functions.createElement('TD')
//     tdpath.appendChild(ppath)

//     const pdate = functions.createElement('P',[], action.formateddate)
//     const tddate = functions.createElement('TD')
//     tddate.appendChild(pdate)

//     tr.appendChild(tduser)
//     tr.appendChild(tdmethod)
//     tr.appendChild(tdpath)
//     tr.appendChild(tddate)
//     return tr
// }

// convertIntoRow(categorybook) {
//   const tr = document.createElement('TR')
//   const tdTitle = document.createElement('TD')
//   tdTitle.textContent = categorybook.book.title
//   const tdAuthor = document.createElement('TD')
//   tdAuthor.textContent = categorybook.book.author
//   const tdCategory = document.createElement('TD')
//   tdCategory.textContent = categorybook.category.name
//   tr.appendChild(tdTitle)
//   tr.appendChild(tdAuthor)
//   tr.appendChild(tdCategory)
//   return tr
// }

// showBooks(allbooks, parent) {
//   parent.innerHTML = ''
//   let def = document.createElement('P')
//   def.textContent = 'No hay libros disponibles con esos datos'

//   const fragment = document.createDocumentFragment()

//   allbooks.forEach(book => {
//     fragment.appendChild(this.createCardBook(book))
//   });

//   if (allbooks.length > 0)
//     parent.appendChild(fragment)
//   else
//     parent.appendChild(def)
// }


// showStock(allbookscategory, parent) {
//   const fragment = document.createDocumentFragment()
//   allbookscategory.forEach(element => {
//     fragment.appendChild(this.convertIntoRow(element))
//   });
//   parent.appendChild(fragment)
// }

//   showLogs(useractions, parent){
//     const fragment = document.createDocumentFragment()
//     useractions.forEach(action => {
//       fragment.appendChild(this.createLogRow(action))
//     });
//     parent.appendChild(fragment)
//   }
// }

// export default Shower

// Importing the functions module for utility functions
import functions from './functions.js';

/**
 * The Shower class provides methods for displaying book-related information on the user interface.
 */
class Shower {
  constructor() {
    // Constructor left empty as there is no initialization logic specific to this class.
  }

  /**
   * Creates an HTML card element to display book information.
   * @param {Object} book - The book object containing information such as title, author, category, etc.
   * @returns {HTMLArticleElement} - The created HTML card element.
   */
  createCardBook = (book) => {
    let card = document.createElement("ARTICLE");
    card.classList.add("book");

    // img
    let img = document.createElement("IMG");
    img.classList.add("book__img");
    img.src = book._cover;
    card.appendChild(img);

    // section
    let section = document.createElement("SECTION");
    section.classList.add("book__textos");
    card.appendChild(section);

    // span ttítulo
    let span = document.createElement("SPAN");
    span.classList.add("book__texto");
    span.textContent = "Título: ";
    section.appendChild(span);

    // span
    span = document.createElement("SPAN");
    span.textContent = book._title;
    section.appendChild(span);

    //br
    let br = document.createElement("BR");
    section.appendChild(br);

    // span autor
    span = document.createElement("SPAN");
    span.classList.add("book__texto");
    span.textContent = "Autor: ";
    section.appendChild(span);

    //span
    span = document.createElement("SPAN");
    span.textContent = book._author;
    section.appendChild(span);

    //br
    br = document.createElement("BR");
    section.appendChild(br);

    // span autor
    span = document.createElement("SPAN");
    span.classList.add("book__texto");
    span.textContent = "Categoría: ";
    section.appendChild(span);

    //span
    span = document.createElement("SPAN");
    span.textContent = book._category;
    section.appendChild(span);

    //br
    br = document.createElement("BR");
    section.appendChild(br);

    span = document.createElement("SPAN");
    span.classList.add("book__texto");
    span.textContent = "Descripción: ";
    section.appendChild(span);
    //br
    br = document.createElement("BR");
    section.appendChild(br);

    // section
    let sectioncontent = document.createElement("SECTION");
    section.classList.add("book__textos");
    card.appendChild(sectioncontent);

    // span content
    span = document.createElement("SPAN");
    span.textContent = book._content;
    section.appendChild(span);

    //button
    let button = document.createElement("BUTTON");
    button.classList.add("book__btnborrar");
    button.id = book._id;
    button.textContent = "Eliminar";
    section.appendChild(button);

    return card;
  };


  /**
   * Creates an HTML row for displaying user action logs.
   * @param {Object} action - The user action object containing information like username, method, path, and date.
   * @returns {HTMLTableRowElement} - The created HTML table row element.
   */
  createLogRow(action) {
    console.log(action.method)
    const tr = functions.createElement('TR', [])

    const puser = functions.createElement('P', [], action.username)
    const tduser = functions.createElement('TD')
    tduser.appendChild(puser)

    const pmethod = functions.createElement('P', [], action.method)
    const tdmethod = functions.createElement('TD')
    tdmethod.appendChild(pmethod)

    let ppath

    if (action.method == 'GET') {
      console.log('entro')
      ppath = functions.createElement('A', [], action.path, false, false, action.path)

    } else {
      ppath = functions.createElement('P', [], action.path)

    }

    const tdpath = functions.createElement('TD')
    tdpath.appendChild(ppath)

    const pdate = functions.createElement('P', [], action.formateddate)
    const tddate = functions.createElement('TD')
    tddate.appendChild(pdate)

    tr.appendChild(tduser)
    tr.appendChild(tdmethod)
    tr.appendChild(tdpath)
    tr.appendChild(tddate)
    return tr
  }

  /**
   * Converts a BookCategory object into an HTML row for displaying stock information.
   * @param {Object} categorybook - The BookCategory object containing book and category information.
   * @returns {HTMLTableRowElement} - The created HTML table row element.
   */
  convertIntoRow(categorybook) {
    const tr = document.createElement('TR')
    const tdTitle = document.createElement('TD')
    tdTitle.textContent = categorybook.book.title
    const tdAuthor = document.createElement('TD')
    tdAuthor.textContent = categorybook.book.author
    const tdCategory = document.createElement('TD')
    tdCategory.textContent = categorybook.category.name
    tr.appendChild(tdTitle)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdCategory)
    return tr
  }


  /**
   * Displays an array of books on the UI.
   * @param {Array} allbooks - An array of book objects to be displayed.
   * @param {HTMLElement} parent - The HTML element to which the books will be appended.
   */
  showBooks(allbooks, parent) {
    parent.innerHTML = ''
    let def = document.createElement('P')
    def.textContent = 'No hay libros disponibles con esos datos'

    const fragment = document.createDocumentFragment()

    allbooks.forEach(book => {
      fragment.appendChild(this.createCardBook(book))
    });

    if (allbooks.length > 0)
      parent.appendChild(fragment)
    else
      parent.appendChild(def)
  }

  /**
   * Displays stock information (BookCategory objects) on the UI.
   * @param {Array} allbookscategory - An array of BookCategory objects representing stock information.
   * @param {HTMLElement} parent - The HTML element to which the stock information will be appended.
   */
  showStock(allbookscategory, parent) {
    const fragment = document.createDocumentFragment()
    allbookscategory.forEach(element => {
      fragment.appendChild(this.convertIntoRow(element))
    });
    parent.appendChild(fragment)
  }

  /**
   * Displays user action logs on the UI.
   * @param {Array} useractions - An array of user action objects representing logs.
   * @param {HTMLElement} parent - The HTML element to which the logs will be appended.
   */
  showLogs(useractions, parent) {
    const fragment = document.createDocumentFragment()
    useractions.forEach(action => {
      fragment.appendChild(this.createLogRow(action))
    });
    parent.appendChild(fragment)
  }
}


// Exporting the Shower class for use in other modules.
export default Shower;
