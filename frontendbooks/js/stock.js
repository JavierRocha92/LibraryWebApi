// //Import to instance objects form classes
// import Category from "./Category.js";
// import Book from "./Book.js";
// import BooksCategory from "./BookCategory.js";
// import Downloader from "./Downloader.js";
// import Shower from "./Shower.js";
// //Get elements form DOM
// const tablastock_body = document.getElementById("tablastock_body");
// //Global variables
// let allcategories = [];
// let allbooks = [];
// let allbookscategory = [];

// let downloader = new Downloader()
// let shower = new Shower()


// //Functions**********************************************************

// const getBooksCateroies = async () => {
//     let catdef = new Category(
//         '0000',
//         'Base de Datos',
//         'base-de-datos')
//     allbooks.forEach(book => {
//         let category

//         allcategories.forEach(element => {
//             if (element.nicename == book.category)
//                 category = element
//         });
//         category = category == undefined ? catdef : category
//         allbookscategory.push(
//             new BooksCategory(
//                 book,
//                 category
//             )
//         )

//     })
//     return allbookscategory
// }

// const getData = async () => {
//     allbooks = await downloader.getBooks()
//     allcategories = await downloader.getCategories()
//     allbookscategory = await getBooksCateroies()
//     shower.showStock(allbookscategory, tablastock_body)
// }

// //Events

// //Event when the page si loaded

// document.addEventListener('DOMContentLoaded', getData)


// Importing necessary classes from external modules
import Category from "./Category.js";
import Book from "./Book.js";
import BooksCategory from "./BookCategory.js";
import Downloader from "./Downloader.js";
import Shower from "./Shower.js";

// Getting DOM elements
const tablastock_body = document.getElementById("tablastock_body");

// Global variables to store data
let allcategories = [];
let allbooks = [];
let allbookscategory = [];

// Creating instances of classes
let downloader = new Downloader();
let shower = new Shower();

// Functions**********************************************************

/**
 * Retrieves books and categories, then populates the allbookscategory array.
 */
const getBooksCateroies = async () => {
    // Default category for books without a specified category
    let catdef = new Category(
        '0000',
        'Base de Datos',
        'base-de-datos'
    );

    allbooks.forEach(book => {
        let category;

        // Finding the category associated with the book
        allcategories.forEach(element => {
            if (element.nicename == book.category)
                category = element;
        });

        // Using the default category if no category is found
        category = category == undefined ? catdef : category;

        // Creating a BooksCategory object and adding it to the array
        allbookscategory.push(
            new BooksCategory(
                book,
                category
            )
        );
    });

    return allbookscategory;
};

/**
 * Fetches books and categories, then displays stock information on the page.
 */
const getData = async () => {
    // Fetching books and categories
    allbooks = await downloader.getBooks();
    allcategories = await downloader.getCategories();

    // Retrieving and displaying stock information
    allbookscategory = await getBooksCateroies();
    shower.showStock(allbookscategory, tablastock_body);
};

// Events

// Event triggered when the page is loaded
document.addEventListener('DOMContentLoaded', getData);

