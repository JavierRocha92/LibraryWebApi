// import Category from "./Category.js";
// import Book from "./Book.js";
// import BooksCategory from "./BookCategory.js";
// import LogUser from "./LogUser.js";



// class Downloader {
//     constructor() {
//         this._logger = new LogUser(localStorage.getItem('user_email'))
//     }

//     getArrayBookObjects(json) {
//         const books = []
//         json.forEach(book => {
//             books.push(new Book(
//                 book.id,
//                 book.title,
//                 book.author,
//                 book.category,
//                 book.content,
//                 book.cover,
//                 book.url_donwload
//             )
//             )
//         });
//         return books
//     }

//     getArrayCategoryObject(json) {
//         console.log(json)
//         const categories = []
//         json.forEach(element => {
//             categories.push(
//                 new Category(
//                     element.id,
//                     element.name,
//                     element.nicename
//                 )
//             )
//         })
//         return categories
//     }

//     jsonAsObjectArray = async (json, type) => {
//         if (type == 'book') {
//             return await this.getArrayBookObjects(json)
//         }
//         if (type == 'category') {
//             return await this.getArrayCategoryObject(json)
//         }

//     }

//     getBooks = async () => {
//         try {
//             const response = await fetch('http://localhost:3000/api/v1/books/')
//             if (!response.ok) {
//                 throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
//             }
//             this._logger.setLogLocalStorage(
//                 'GET',
//                 `http://localhost:3000/api/v1/books/`)
//             const json = await response.json()
//             return await this.jsonAsObjectArray(json, 'book')
//         } catch (error) {
//             console.error('Error en la solicitud:', error.message);
//             throw error; // Puedes elegir lanzar el error nuevamente o manejarlo de alguna otra manera.

//         }

//     }
//     getCategories = async () => {
//         try {
//             const response = await fetch('http://localhost:3000/api/v1/categories/')
//             if (!response.ok) {
//                 throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
//             }
//             this._logger.setLogLocalStorage(
//                 'GET',
//                 `http://localhost:3000/api/v1/categories/`)
//             const json = await response.json()
//             return await this.jsonAsObjectArray(json, 'category')
//         } catch (error) {

//             console.error('Error en la solicitud:', error.message);
//             throw error; // Puedes elegir lanzar el error nuevamente o manejarlo de alguna otra manera.
//         }

//     }


//     getAuthors = async () => {
//         try {
//             const response = await fetch('http://localhost:3000/api/v1/authors/');

//             if (!response.ok) {
//                 // Si la respuesta no está en el rango [200, 299], lanza un error
//                 throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
//             }
//             this._logger.setLogLocalStorage(
//                 'GET',
//                 `http://localhost:3000/api/v1/authors/`)
//             return await response.json();
//         } catch (error) {
//             // Manejo de errores
//             console.error('Error en la solicitud:', error.message);
//             throw error; // Puedes elegir lanzar el error nuevamente o manejarlo de alguna otra manera.
//         }
//     }

//     getBooksByAuthor = async (author) => {
//         try {
//             const response = await fetch(`http://localhost:3000/api/v1/books/author/${author}`)
//             if (!response.ok) {
//                 // Si la respuesta no está en el rango [200, 299], lanza un error
//                 throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);

//             }
//             this._logger.setLogLocalStorage(
//                 'GET',
//                 `http://localhost:3000/api/v1/books/author/${author}`)
//             const json = await response.json()
//             return await this.getArrayBookObjects(json)

//         } catch (error) {
//             console.error('Error en la solicitud:', error.message);
//             throw error; // Puedes elegir lanzar el error nuevamente o manejarlo de alguna otra manera.

//         }
//     }
//     getBooksByCategory = async (category) => {
//         try {
//             const response = await fetch(`http://localhost:3000/api/v1/books/category/${category}`)
//             if (!response.ok) {

//                 // Si la respuesta no está en el rango [200, 299], lanza un error
//                 throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
//             }
//             this._logger.setLogLocalStorage(
//                 'GET',
//                 `http://localhost:3000/api/v1/books/category/${category}`)
//             const json = await response.json()
//             return await this.getArrayBookObjects(json)

//         } catch (error) {
//             console.error('Error en la solicitud:', error.message);
//             throw error; // Puedes elegir lanzar el error nuevamente o manejarlo de alguna otra manera.

//         }
//     }

//     deleteBook = async (id) => {
//         fetch(`http://localhost:3000/api/v1/books/${id}`, {
//             method: 'DELETE',
//         })
//             .then(response => {
//                 //No devuelve un JSON, solo el status de como se ha realizado el borrado
//                 console.log(response)
//                 if (response.status == 200) {
//                     console.log("Se ha borrado correctamente")
//                     this._logger.setLogLocalStorage(
//                         'DELETE',
//                         `http://localhost:3000/api/v1/books/${id}`)
//                 } else {
//                     console.log("No se ha podido realizar el borrado")
//                 }
//             })
//             .catch(error => console.log(error));
//     }

    // insertBook = async (data) => {
    //     data = {
    //         title: data[0],
    //         author: data[1],
    //         category: data[2],
    //         descripcion: data[3]
    //     };

    //     fetch("http://localhost:3000/api/v1/books/",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         }) //  Aqui acaba el fetch
    //         .then((response) => {
    //             console.log(response.status);

    //             return response.json();
    //         })
    //         .then((responseJSON) => {
    //             console.log("LA INSERCIÓN UTILIZANDO POST SE HA REALIZADO CORRECTAMENTE");
    //             console.log(responseJSON);
    //             console.log("---------------------------------------------------------");
    //             this._logger.setLogLocalStorage(
    //                 'post',
    //                 'http://localhost:3000/api/v1/books/')
    //         })
    //         .catch((error) => console.log(error));
    // }





// }

// export default Downloader

import Category from "./Category.js";
import Book from "./Book.js";
import LogUser from "./LogUser.js";

/**
 * The `Downloader` class handles fetching and processing data related to books, categories, authors, and user logs.
 */
class Downloader {
    /**
     * Constructor for the Downloader class.
     * Initializes a new instance of the Downloader class with a logger for the current user.
     */
    constructor() {
        this._logger = new LogUser(localStorage.getItem('user_email'));
    }

    /**
     * Converts a JSON array representing books into an array of Book objects.
     * @param {Object[]} json - The JSON array containing book data.
     * @returns {Book[]} - An array of Book objects.
     */
    getArrayBookObjects(json) {
        const books = [];
        json.forEach(book => {
            books.push(new Book(
                book.id,
                book.title,
                book.author,
                book.category,
                book.content,
                book.cover,
                book.url_donwload
            ));
        });
        return books;
    }

    /**
     * Converts a JSON array representing categories into an array of Category objects.
     * @param {Object[]} json - The JSON array containing category data.
     * @returns {Category[]} - An array of Category objects.
     */
    getArrayCategoryObject(json) {
        const categories = [];
        json.forEach(element => {
            categories.push(
                new Category(
                    element.id,
                    element.name,
                    element.nicename
                )
            );
        });
        return categories;
    }

    /**
     * Converts a JSON array to an array of objects of a specific type (book or category).
     * @param {Object[]} json - The JSON array containing data.
     * @param {string} type - The type of objects to convert (either 'book' or 'category').
     * @returns {Book[]|Category[]} - An array of Book or Category objects.
     */
    jsonAsObjectArray = async (json, type) => {
        if (type === 'book') {
            return await this.getArrayBookObjects(json);
        }
        if (type === 'category') {
            return await this.getArrayCategoryObject(json);
        }
    }

    /**
     * Fetches the list of books from the API.
     * @returns {Promise<Book[]>} - A promise that resolves to an array of Book objects.
     */
    getBooks = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/books/');
            if (!response.ok) {
                throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
            }
            this._logger.setLogLocalStorage(
                'GET',
                'http://localhost:3000/api/v1/books/');
            const json = await response.json();
            return await this.jsonAsObjectArray(json, 'book');
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
            throw error;
        }
    }

    /**
     * Fetches the list of categories from the API.
     * @returns {Promise<Category[]>} - A promise that resolves to an array of Category objects.
     */
    getCategories = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/categories/');
            if (!response.ok) {
                throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
            }
            this._logger.setLogLocalStorage(
                'GET',
                'http://localhost:3000/api/v1/categories/');
            const json = await response.json();
            return await this.jsonAsObjectArray(json, 'category');
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
            throw error;
        }
    }

    /**
     * Fetches the list of authors from the API.
     * @returns {Promise<Object[]>} - A promise that resolves to an array of author objects.
     */
    getAuthors = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/authors/');
            if (!response.ok) {
                throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
            }
            this._logger.setLogLocalStorage(
                'GET',
                'http://localhost:3000/api/v1/authors/');
            return await response.json();
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
            throw error;
        }
    }

    /**
     * Fetches the list of books by a specific author from the API.
     * @param {string} author - The name of the author.
     * @returns {Promise<Book[]>} - A promise that resolves to an array of Book objects.
     */
    getBooksByAuthor = async (author) => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/books/author/${author}`);
            if (!response.ok) {
                throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
            }
            this._logger.setLogLocalStorage(
                'GET',
                `http://localhost:3000/api/v1/books/author/${author}`);
            const json = await response.json();
            return await this.getArrayBookObjects(json);
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
            throw error;
        }
    }

    /**
     * Fetches the list of books by a specific category from the API.
     * @param {string} category - The name of the category.
     * @returns {Promise<Book[]>} - A promise that resolves to an array of Book objects.
     */
    getBooksByCategory = async (category) => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/books/category/${category}`);
            if (!response.ok) {
                throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
            }
            this._logger.setLogLocalStorage(
                'GET',
                `http://localhost:3000/api/v1/books/category/${category}`);
            const json = await response.json();
            return await this.getArrayBookObjects(json);
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
            throw error;
        }
    }

    /**
     * Deletes a book with the specified ID from the API.
     * @param {string} id - The ID of the book to be deleted.
     */
    deleteBook = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/books/${id}`, {
                method: 'DELETE',
            });
            if (response.status === 200) {
                console.log("Se ha borrado correctamente");
                this._logger.setLogLocalStorage(
                    'DELETE',
                    `http://localhost:3000/api/v1/books/${id}`);
            } else {
                console.log("No se ha podido realizar el borrado");
            }
        } catch (error) {
            console.log(error);
        }
    }

        /**
     * Inserts a new book into the API.
     * @param {string[]} data - An array containing the title, author, category, and description of the book.
     */
        insertBook = async (data) => {
            // Prepare data object
            data = {
                title: data[0],
                author: data[1],
                category: data[2],
                description: data[3] // Fixed typo: "descripcion" to "description"
            };
    
            // Perform the fetch request to insert the book
            fetch("http://localhost:3000/api/v1/books/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((response) => {
                console.log(response.status);
    
                return response.json();
            })
            .then((responseJSON) => {
                console.log("Insertion using POST has been successful");
                console.log(responseJSON);
                console.log("---------------------------------------------------------");
                
                // Log the POST operation
                this._logger.setLogLocalStorage(
                    'post',
                    'http://localhost:3000/api/v1/books/'
                );
            })
            .catch((error) => console.log(error));
        }
    }
    
    export default Downloader;
    