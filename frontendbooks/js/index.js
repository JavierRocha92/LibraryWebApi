//Elements from DOM
const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

//Funtions************************************************************

/**
 * Funciton to save value given as parameter into localsotrage to use in other apoges
 * 
 * @param {Array} userValues values form user, email and password
 */
const stoarageUserValues = (userValues) => {
    const email = userValues[0]
    const password = userValues[1]

    localStorage.setItem('user_email', email)
}
/**
 * Function to set values from form and give them as parameters to call storagevalues function,
 * and then redirect user to stock. html page
 * 
 * @param {Event} event eventro from form when it is on submit
 */
const processFrom = (event) => {
    event.preventDefault()
    const e = event.target
    
    const email = e.children[1].children[1].value
    const password = e.children[2].children[1].value
    
    const userValues = [email, password]

    stoarageUserValues(userValues)

    location.href = 'stock.html'
}

//EVENTS

//Event to catch when form is submit

form.addEventListener('submit', processFrom)


