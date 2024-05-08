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


    // displayAvailableBooks(): void {
    //     console.log(`Available books in ${this.name} library:`);
    //     this.books.forEach(book => {
    //         if (book.available) {
    //             console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
    //         }
    //     });
    // }
    
    
}


const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", false);

const library = new Library("Central Library", [book1, book2]);


