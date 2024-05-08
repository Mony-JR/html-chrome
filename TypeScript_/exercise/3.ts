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

    borrowBook(title: string): void {
        const book = this.books.find(book => book.title === title);
        if (book) {
            if (book.available) {
                book.available = false;
                console.log(`${title} has been borrowed successfully.`);
            } else {
                console.log(`${title} is not available for borrowing.`);
            }
        } else {
            console.log(`${title} is not found in the library.`);
        }
    }

    returnBook(title: string): void {
        const book = this.books.find(book => book.title === title);
        if (book) {
            if (!book.available) {
                book.available = true;
                console.log(`${title} has been returned successfully.`);
            } else {
                console.log(`${title} is already available.`);
            }
        } else {
            console.log(`${title} is not found in the library.`);
        }
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", false);

const library = new Library("Central Library", [book1, book2]);

library.displayAvailableBooks();

library.borrowBook("To Kill a Mockingbird"); 
library.borrowBook("The Great Gatsby"); 
library.borrowBook("Non-existent Book");

library.displayAvailableBooks(); 

library.returnBook("To Kill a Mockingbird"); 
library.returnBook("Non-existent Book"); 

library.displayAvailableBooks(); 
