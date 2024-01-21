import Book from "./books.js";

// Select categorias
const select_categories = document.getElementById("select_categories");

// Select autores
const select_authors = document.getElementById("select_authors");
const books = document.getElementById("books");

// Botón crear libro
const btn_allbooks = document.getElementById("btn_allbooks");

// Modal
const modal_container = document.getElementById("modal_container");

const btn_newbook = document.getElementById("btn_newbook");
const btn_modal_aniadir = document.getElementById("btn_modal_aniadir");
const btn_modal_cancelar = document.getElementById("btn_modal_cancelar");

const modal_input_title = document.getElementById("modal_input_title");
const modal_input_author = document.getElementById("modal_input_author");
const modal_select_category = document.getElementById("modal_select_category");
const modal_input_content = document.getElementById("modal_input_content");

// Arrays para datos
let userActions = []
let allbooks = [];
let allcategories = [];
let allauthors = [];

// Crear un libro
const createCardBook = (book) => {
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

const setLogLocalStorage = (action, path, method) => {
  let date = new Date();

  let formateddate =
    ("0" + date.getDate()).slice(-2) +
    "/" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    date.getFullYear() +
    " - " +
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2) +
    ":" +
    ("0" + date.getSeconds()).slice(-2);

  let info = {
    'action' : action,
    'path' : path,
    'method' : method,
    'formateddate' : formateddate
  }

  userActions = JSON.parse(localStorage.getItem('userActions'))
  userActions.push(info)
  localStorage.setItem(JSON.stringify('userActions',userActions))
};
