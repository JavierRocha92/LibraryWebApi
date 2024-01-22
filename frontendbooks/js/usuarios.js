//Import class
import LogUser from "./LogUser.js";
import Shower from "./Shower.js";

//Elements from DOM
const tablastock_body = document.getElementById('tablastock_body')
//Declare global variables
const logger = new LogUser(localStorage.getItem('user_email'))
const shower = new Shower()

//Functions*****************************************

const loadUserActions = () => {
    const useractions = localStorage.getItem('userActions') ?
    JSON.parse(localStorage.getItem('userActions')) : []

    shower.showLogs(useractions, tablastock_body)
}



//Events

//Event when page is loaded

document.addEventListener('DOMContentLoaded', loadUserActions)




