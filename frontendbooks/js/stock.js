//Import to instance objects form classes
import Category from "./Category.js";
import Book from "./Book.js";
import BooksCategory from "./BookCategory.js";
import Downloader from "./Downloader.js";
import Shower from "./Shower.js";
//Get elements form DOM
const tablastock_body = document.getElementById("tablastock_body");
//Global variables
let allcategories = [];
let allbooks = [];
let allbookscategory = [];

let downloader = new Downloader()
let shower = new Shower()


//Functions**********************************************************

const getBooksCateroies = async () => {
    let catdef = new Category(
        '0000',
        'Base de Datos',
        'base-de-datos')
    allbooks.forEach(book => {
        let category

        allcategories.forEach(element => {
            if (element.nicename == book.category)
                category = element
        });
        category = category == undefined ? catdef : category
        allbookscategory.push(
            new BooksCategory(
                book,
                category
            )
        )

    })
    return allbookscategory
}

const getData = async () => {
    allbooks = await downloader.getBooks()
    allcategories = await downloader.getCategories()
    allbookscategory = await getBooksCateroies()
    shower.showStock(allbookscategory, tablastock_body)
}

//Events

//Event when the page si loaded

document.addEventListener('DOMContentLoaded', getData)



