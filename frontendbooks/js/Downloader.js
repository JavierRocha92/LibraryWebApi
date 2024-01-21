import Category from "./Category.js";
import Book from "./Book.js";
import BooksCategory from "./BookCategory.js";

class Downloader {
    constructor() {

    }

    getArrayBookObjects(json) {
        const books = []
        json.forEach(book => {
            books.push(new Book(
                book.id,
                book.title,
                book.author,
                book.category,
                book.content,
                book.cover,
                book.url_donwload
            )
            )
        });
        return books
    }

    getArrayCategoryObject(json) {
        console.log(json)
        const categories = []
        json.forEach(element => {
            categories.push(
                new Category(
                    element.id,
                    element.name,
                    element.nicename
                )
            )
        })
        return categories
    }

    jsonAsObjectArray = async (json, type) => {
        if (type == 'book') {
            return await this.getArrayBookObjects(json)
        }
        if (type == 'category') {
            return await this.getArrayCategoryObject(json)
        }

    }

    getBooks = async () => {
        const response = await fetch('http://localhost:3000/api/v1/books/')
        const json = await response.json()
        return await this.jsonAsObjectArray(json, 'book')
    }
    getCategories = async () => {
        const response = await fetch('http://localhost:3000/api/v1/categories/')
        const json = await response.json()
        return await this.jsonAsObjectArray(json, 'category')
    }

    getAuthors = async () => {
        const response = await fetch('http://localhost:3000/api/v1/authors/')
        const json = await response.json()
        return json
    }

    getBooksByAuthor = async (author) => {
        const response = await fetch(`http://localhost:3000/api/v1/books/author/${author}`)
        const json = await response.json()
        return await this.getArrayBookObjects(json)
    }
    getBooksByCategory = async (categpry) => {
        const response = await fetch(`http://localhost:3000/api/v1/books/category/${categpry}`)
        const json = await response.json()
        return await this.getArrayBookObjects(json)
    }

    deleteBook = async (id) => {
        fetch(`http://localhost:3000/api/v1/books/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                //No devuelve un JSON, solo el status de como se ha realizado el borrado
                console.log(response)
                if (response.status == 200) {
                    console.log("Se ha borrado correctamente")
                } else {
                    console.log("No se ha podido realizar el borrado")
                }
            })
            .catch(error => console.log(error));
    }

    insertBook = async (data) => {
        data = {
            title: data[0],
            author: data[1],
            category: data[2],
            descripcion: data[3],
          };
          
          fetch("http://localhost:3000/api/v1/books/", 
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }) //  Aqui acaba el fetch
            .then((response) => {
              console.log(response.status);
          
              return response.json();
            })
            .then((responseJSON) => {
              console.log("LA INSERCIÓN UTILIZANDO POST SE HA REALIZADO CORRECTAMENTE");
              console.log(responseJSON);
              console.log("---------------------------------------------------------");
            })
            .catch((error) => console.log(error));
    }





}

export default Downloader