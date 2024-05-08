class Book {
    title: string;
    author: string;
    genre: string;
    available: boolean;

    constructor(title: string, author: string, genre: string, available: boolean) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.available = available;
    }

}

class Library {
    name: string;
    books: Book[];

    constructor(name: string, books: Book[]) {
        this.name = name;
        this.books = books;
    }

    displayAvailableBooks(): void {
        console.log(`Available books in ${this.name} library:`);
        this.books.forEach(book => {
            if (book.available) {
                console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
            }
        });
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book "${book.title}" added to ${this.name} library.`);
    }
    removeBookByTitle(title: string): void {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Book "${title}" removed from ${this.name} library.`);
        } else {
            console.log(`Book "${title}" not found in ${this.name} library.`);
        }
    }

    removeBookByISBN(isbn: string): void {
        const index = this.books.findIndex(book => book.author === isbn);
        if (index !== -1) {
            const title = this.books[index].title;
            this.books.splice(index, 1);
            console.log(`Book "${title}" removed from ${this.name} library.`);
        } else {
            console.log(`Book with ISBN "${isbn}" not found in ${this.name} library.`);
        }
    }
}




const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", false);

const library = new Library("Central Library", [book1, book2]);
const newBook = new Book("1984", "Moony", "Dystopian", true);
library.addBook(newBook);


library.displayAvailableBooks(); 

library.displayAvailableBooks(); 


