class LogUser {
    constructor(username) {
        this._username = this.getUserName(username)
    }

    getUserName(username) {
        return username.slice(0, username.indexOf('@'))
    }

    // crateDate(){
    //     const date = new Date()
    // }

    

    setLogLocalStorage(method, path) {
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
            'username': this._username,
            'path': path,
            'method': method,
            'formateddate': formateddate
        }

        let userActions = localStorage.getItem('userActions') ?
            JSON.parse(localStorage.getItem('userActions')) : []

        userActions.push(info)
        localStorage.setItem('userActions',JSON.stringify( userActions))
    };

    // saveLog(http, stmt){
    //     const row = createRow(http, stmt)
    // }
}

export default LogUser