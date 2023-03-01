let myLibrary = [];

function Book(name, author, pagecount) {
    this.name = name
    this.author = author
    this.pagecount = pagecount
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function removeBookFromLibraryByName (bookName) {
    myLibrary = myLibrary.filter((libBook) => libBook.name !== bookName);
}

function createBook (name, author, pagecount) {
    // const newBook = new Book(name, author, pagecount);
    // return newBook;
    return new Book(name, author, pagecount); // Has the same output
}

// TEST STUFF
const myBook = createBook('Lord of the Rings', 'J.R.R. Tolkien', '456');
let aBook = createBook('Cooking for Dummies', 'John Adams', '123');
addBookToLibrary(myBook);
addBookToLibrary(aBook);

console.log();