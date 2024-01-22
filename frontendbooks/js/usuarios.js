// //Import class
// import LogUser from "./LogUser.js";
// import Shower from "./Shower.js";

// //Elements from DOM
// const tablastock_body = document.getElementById('tablastock_body')
// //Declare global variables
// const logger = new LogUser(localStorage.getItem('user_email'))
// const shower = new Shower()

// //Functions*****************************************

// const loadUserActions = () => {
//     const useractions = localStorage.getItem('userActions') ?
//     JSON.parse(localStorage.getItem('userActions')) : []

//     shower.showLogs(useractions, tablastock_body)
// }



// //Events

// //Event when page is loaded

// document.addEventListener('DOMContentLoaded', loadUserActions)

// Importing LogUser and Shower classes from external modules
import LogUser from "./LogUser.js";
import Shower from "./Shower.js";

// Getting DOM element
const tablastock_body = document.getElementById('tablastock_body');

// Declaring global variables
const logger = new LogUser(localStorage.getItem('user_email'));
const shower = new Shower();

// Functions*****************************************

/**
 * Loads user actions from local storage and displays them on the page.
 */
const loadUserActions = () => {
    // Retrieving user actions from local storage or initializing an empty array
    const useractions = localStorage.getItem('userActions') ?
        JSON.parse(localStorage.getItem('userActions')) : [];

    // Displaying user actions on the page
    shower.showLogs(useractions, tablastock_body);
};

// Events

// Event triggered when the page is loaded
document.addEventListener('DOMContentLoaded', loadUserActions);



