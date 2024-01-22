// import Book from "./Book.js";
// import Category from "./Category.js";
// import BookCategory from "./BookCategory.js";
// import Downloader from "./Downloader.js";
// import Shower from "./Shower.js";

// //Consultas
// const consultas = document.getElementById("consultas");

// // Select categorias
// const select_categories = document.getElementById("select_categories");

// // Select autores
// const select_authors = document.getElementById("select_authors");
// const books = document.getElementById("books");

// // Botón crear libro
// const btn_allbooks = document.getElementById("btn_allbooks");

// // Modal
// const modal_container = document.getElementById("modal_container");

// const btn_newbook = document.getElementById("btn_newbook");
// const btn_modal_aniadir = document.getElementById("btn_modal_aniadir");
// const btn_modal_cancelar = document.getElementById("btn_modal_cancelar");

// const modal_input_title = document.getElementById("modal_input_title");
// const modal_input_author = document.getElementById("modal_input_author");
// const modal_select_category = document.getElementById("modal_select_category");
// const modal_input_content = document.getElementById("modal_input_content");

// // Arrays para datos
// let userActions = []
// let allbooks = [];
// let allcategories = [];
// let allbookscategory = []
// let allauthorsnames = []
// let allcategoriesnames = []

// //Objets

// const downloader = new Downloader()
// const shower = new Shower()




// //Function about load element on screen

// const loadSelect = (select, array) => {
//   let option
//   const fragment = document.createDocumentFragment()
//   if (select == select_categories || select == modal_select_category) {
//     array.forEach(element => {
//       option = document.createElement('OPTION')
//       option.name = element.name
//       option.label = element.name
//       option.value = element.name
//       allcategoriesnames.push(element.name)
//       fragment.append(option)
//     });
//   }
//   if (select == select_authors) {
//     array.forEach(element => {
//       option = document.createElement('OPTION')
//       option.name = element
//       option.label = element
//       option.value = element
//       allauthorsnames.push(element)
//       fragment.append(option)
//     });
//   }
//   select.appendChild(fragment)
// }

// const loadSelects = async () => {
//   loadSelect(select_categories, await downloader.getCategories())
//   loadSelect(modal_select_category, await downloader.getCategories())
//   loadSelect(select_authors, await downloader.getAuthors())
// }

// const getBooksCateroies = async () => {
//   let catdef = new Category(
//     '0000',
//     'Base de Datos',
//     'base-de-datos')
//   allbooks.forEach(book => {
//     let category

//     allcategories.forEach(element => {
//       if (element.nicename == book.category)
//         category = element
//     });
//     category = category == undefined ? catdef : category
//     allbookscategory.push(
//       new BookCategory(
//         book,
//         category
//       )
//     )

//   })
//   return allbookscategory
// }

// const getData = async () => {
//   allbooks = await downloader.getBooks()
//   allcategories = await downloader.getCategories()
//   allbookscategory = await getBooksCateroies()
//   shower.showBooks(allbooks, books)
// }

// const loadPage = async () => {
//   loadSelects()
//   getData()
// }

// //Fucnitons about queries

// const getCategoryNiceName = (value) => {
//   let nicename
//   allcategories.forEach(category => {
//     if (category.name == value) {
//       nicename = category.nicename
//     }
//   });

//   return nicename
// }

// const handleSelectQuery = async (event) => {
//   const e = event.target
//   console.log(e.value)
//   if (e == select_authors) {
//     const author = e.value
//     shower.showBooks(await downloader.getBooksByAuthor(author), books)
//   }
//   if (e == select_categories) {
//     const category = getCategoryNiceName(e.value)
//     shower.showBooks(await downloader.getBooksByCategory(category), books)
//   }

// }

// const catchElementOnDelete = (event) => {
//   const e = event.target

//   if (e.classList.contains('book__btnborrar')) {
//     downloader.deleteBook(e.id)
//   }
// }

// const getFormInfo = () => {
//   const data = []
//   data.push(
//     modal_input_title.value,
//     modal_input_author.value,
//     modal_select_category.value,
//     modal_input_content.value)
//   return data

// }

// const handleFormAction = (event) => {
//   const e = event.target
//   if (e == btn_modal_aniadir) {
//     const response = downloader.insertBook(getFormInfo())
//     localStorage.setItem('response', JSON.stringify(response))

//   }
//   if (e == btn_modal_cancelar) {
//     modal_container.classList.add('hide-modal')
//     // modal_container.classList.remove('show-modal')
//   }
// }


// //EVENTS
// //Event when the page is loaded

// document.addEventListener('DOMContentLoaded', loadPage)

// //Event to catch when cosnutlas selects was changed

// consultas.addEventListener('change', handleSelectQuery)

// //Event when all button query is pressed

// btn_allbooks.addEventListener('click', async () => {
//   allbooks = await downloader.getBooks()
//   shower.showBooks(allbooks, books)
// })

// //Event when an element into books element is pressed

// books.addEventListener('click', catchElementOnDelete)

// //Event when create book button is pressed

// btn_newbook, addEventListener('click', () => {
//   // modal_container.classList.remove('hide-modal')
//   modal_container.classList.add('show-modal')
// })

// //Event to catch when form to create new book is submit

// modal_container.addEventListener('click', handleFormAction)

// Importing required modules and classes
import Book from "./Book.js";
import Category from "./Category.js";
import BookCategory from "./BookCategory.js";
import Downloader from "./Downloader.js";
import Shower from "./Shower.js";

// DOM elements
const consultas = document.getElementById("consultas");
const select_categories = document.getElementById("select_categories");
const select_authors = document.getElementById("select_authors");
const books = document.getElementById("books");
const btn_allbooks = document.getElementById("btn_allbooks");
const modal_container = document.getElementById("modal_container");
const btn_newbook = document.getElementById("btn_newbook");
const btn_modal_aniadir = document.getElementById("btn_modal_aniadir");
const btn_modal_cancelar = document.getElementById("btn_modal_cancelar");
const modal_input_title = document.getElementById("modal_input_title");
const modal_input_author = document.getElementById("modal_input_author");
const modal_select_category = document.getElementById("modal_select_category");
const modal_input_content = document.getElementById("modal_input_content");

// Arrays for data storage
let userActions = [];
let allbooks = [];
let allcategories = [];
let allbookscategory = [];
let allauthorsnames = [];
let allcategoriesnames = [];

// Objects
const downloader = new Downloader();
const shower = new Shower();

/**
 * Loads options into a dropdown select element.
 * @param {HTMLSelectElement} select - The select element to load options into.
 * @param {Array} array - An array of objects containing data for the options.
 */
const loadSelect = (select, array) => {
  let option;
  const fragment = document.createDocumentFragment();
  
  if (select == select_categories || select == modal_select_category) {
    array.forEach(element => {
      option = document.createElement('OPTION');
      option.name = element.name;
      option.label = element.name;
      option.value = element.name;
      allcategoriesnames.push(element.name);
      fragment.append(option);
    });
  }
  
  if (select == select_authors) {
    array.forEach(element => {
      option = document.createElement('OPTION');
      option.name = element;
      option.label = element;
      option.value = element;
      allauthorsnames.push(element);
      fragment.append(option);
    });
  }
  
  select.appendChild(fragment);
};

/**
 * Loads data into dropdown select elements.
 */
const loadSelects = async () => {
  loadSelect(select_categories, await downloader.getCategories());
  loadSelect(modal_select_category, await downloader.getCategories());
  loadSelect(select_authors, await downloader.getAuthors());
};

/**
 * Associates books with categories based on their nicename.
 * @returns {Array} - An array of BookCategory objects.
 */
const getBooksCateroies = async () => {
  let catdef = new Category(
    '0000',
    'Base de Datos',
    'base-de-datos'
  );

  allbooks.forEach(book => {
    let category;

    allcategories.forEach(element => {
      if (element.nicename == book.category)
        category = element;
    });

    category = category == undefined ? catdef : category;
    
    allbookscategory.push(
      new BookCategory(
        book,
        category
      )
    );
  });
  
  return allbookscategory;
};

/**
 * Fetches initial data and loads the page.
 */
const getData = async () => {
  allbooks = await downloader.getBooks();
  allcategories = await downloader.getCategories();
  allbookscategory = await getBooksCateroies();
  shower.showBooks(allbooks, books);
};

/**
 * Loads the page with initial data.
 */
const loadPage = async () => {
  loadSelects();
  getData();
};

/**
 * Gets the nicename of a category based on its name.
 * @param {string} value - The name of the category.
 * @returns {string|undefined} - The nicename of the category or undefined if not found.
 */
const getCategoryNiceName = (value) => {
  let nicename;
  
  allcategories.forEach(category => {
    if (category.name == value) {
      nicename = category.nicename;
    }
  });

  return nicename;
};

/**
 * Handles changes in select elements for queries.
 * @param {Event} event - The change event.
 */
const handleSelectQuery = async (event) => {
  const e = event.target;

  if (e == select_authors) {
    const author = e.value;
    shower.showBooks(await downloader.getBooksByAuthor(author), books);
  }

  if (e == select_categories) {
    const category = getCategoryNiceName(e.value);
    shower.showBooks(await downloader.getBooksByCategory(category), books);
  }
};

/**
 * Handles clicking on elements within the books container, specifically for deleting books.
 * @param {Event} event - The click event.
 */
const catchElementOnDelete = (event) => {
  const e = event.target;

  if (e.classList.contains('book__btnborrar')) {
    downloader.deleteBook(e.id);
  }
};

/**
 * Gets data from the form.
 * @returns {Array} - An array containing data from the form inputs.
 */
const getFormInfo = () => {
  const data = [];
  data.push(
    modal_input_title.value,
    modal_input_author.value,
    modal_select_category.value,
    modal_input_content.value
  );
  return data;
};

/**
 * Handles actions related to the form, such as adding a new book or canceling.
 * @param {Event} event - The click event.
 */
const handleFormAction = (event) => {
  const e = event.target;

  if (e == btn_modal_aniadir) {
    const response = downloader.insertBook(getFormInfo());
    localStorage.setItem('response', JSON.stringify(response));
  }

  if (e == btn_modal_cancelar) {
    modal_container.classList.remove('show-modal');
    modal_container.classList.add('hide-modal');
  }
};

// Event listeners
document.addEventListener('DOMContentLoaded', loadPage);

consultas.addEventListener('change', handleSelectQuery);

btn_allbooks.addEventListener('click', async () => {
  allbooks = await downloader.getBooks();
  shower.showBooks(allbooks, books);
});

books.addEventListener('click', catchElementOnDelete);

btn_newbook.addEventListener('click', () => {
  modal_container.classList.remove('hdie-modal');
  modal_container.classList.add('show-modal');
});

modal_container.addEventListener('click', handleFormAction);
