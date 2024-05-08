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



class User {
    name: string;
    borrowedBooks: Book[];

    constructor(name: string) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(library: Library, title: string): void {
        const book = library.books.find(book => book.title === title);
        if (book) {
            if (book.available) {
                book.available = false;
                this.borrowedBooks.push(book);
                console.log(`${this.name} has borrowed ${title} successfully.`);
            } else {
                console.log(`${title} is not available for borrowing.`);
            }
        } else {
            console.log(`${title} is not found in the library.`);
        }
    }

    viewBorrowedBooks(): void {
        if (this.borrowedBooks.length === 0) {
            console.log(`${this.name} has not borrowed any books yet.`);
        } else {
            console.log(`${this.name}'s borrowed books:`);
            this.borrowedBooks.forEach(book => {
                console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
            });
        }
    }
}

// Example usage:
const user1 = new User("Alice");
const user2 = new User("Bob");

user1.borrowBook(library, "To Kill a Mockingbird"); 
user2.borrowBook(library, "The Great Gatsby"); 
user1.borrowBook(library, "Non-existent Book"); 

user1.viewBorrowedBooks(); 
user2.viewBorrowedBooks(); 



