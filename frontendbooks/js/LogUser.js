// class LogUser {
//     constructor(username) {
//         this._username = this.getUserName(username)
//     }

//     getUserName(username) {
//         return username.slice(0, username.indexOf('@'))
//     }



//     setLogLocalStorage(method, path) {
//         let date = new Date();

//         let formateddate =
//             ("0" + date.getDate()).slice(-2) +
//             "/" +
//             ("0" + (date.getMonth() + 1)).slice(-2) +
//             "/" +
//             date.getFullYear() +
//             " - " +
//             ("0" + date.getHours()).slice(-2) +
//             ":" +
//             ("0" + date.getMinutes()).slice(-2) +
//             ":" +
//             ("0" + date.getSeconds()).slice(-2);

//         let info = {
//             'username': this._username,
//             'path': path,
//             'method': method,
//             'formateddate': formateddate
//         }

//         let userActions = localStorage.getItem('userActions') ?
//             JSON.parse(localStorage.getItem('userActions')) : []

//         userActions.push(info)
//         localStorage.setItem('userActions',JSON.stringify( userActions))
//     };

// }

// export default LogUser

/**
 * Represents a user log for actions performed in the application.
 */
class LogUser {
    /**
     * Creates a new LogUser instance.
     * @param {string} username - The username associated with the user log.
     */
    constructor(username) {
        // Initializing the username using the provided username.
        this._username = this.getUserName(username);
    }

    /**
     * Extracts and returns the username part before '@' from the provided email.
     * @param {string} username - The user's email address.
     * @returns {string} - The extracted username.
     */
    getUserName(username) {
        return username.slice(0, username.indexOf('@'));
    }

    /**
     * Records the user's action in the local storage.
     * @param {string} method - The HTTP method used for the action (e.g., GET, POST, DELETE).
     * @param {string} path - The path or endpoint associated with the action.
     */
    setLogLocalStorage(method, path) {
        // Getting the current date and time.
        let date = new Date();

        // Formatting the date for display.
        let formattedDate =
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

        // Creating an information object for the log entry.
        let info = {
            'username': this._username,
            'path': path,
            'method': method,
            'formattedDate': formattedDate
        };

        // Retrieving existing user actions from local storage or initializing an empty array.
        let userActions = localStorage.getItem('userActions') ?
            JSON.parse(localStorage.getItem('userActions')) : [];

        // Adding the new log entry to the array.
        userActions.push(info);

        // Saving the updated user actions array in local storage.
        localStorage.setItem('userActions', JSON.stringify(userActions));
    }
}

// Exporting the LogUser class for use in other modules.
export default LogUser;
