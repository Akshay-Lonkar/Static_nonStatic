class Book {
    constructor(bookName) {
        this.Book = bookName;
    }
    static author(){
        return "Im author of this Book!"
    }
}

let myBook = new Book("JavaScript")

console.log(Book.author());   // Static

console.log(myBook);    // Non-Static