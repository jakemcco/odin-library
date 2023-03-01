// Externals

// User inputs

// inputHandler
// createNewItemCard
// addItemCard
// removeItemCard
// updateDisplay

const libraryGrid = document.getElementById('library-grid');
const addBookForm = document.getElementById('add-book-form');




function clearLibraryGrid() {
    libraryGrid.innerHTML = ''
}

//Naive approach to simply clear and re-create library each time
function updateLibraryGrid() {
    clearLibraryGrid();
    for (let book of myLibrary) {
        createBookCard(book)
    }
}

function createBookCard(book) {
    //Object.assign allows us to set html attributes in one line, instead of having separate lines for item.classList.add(...) or item.onclick = ....
    const bookCard = Object.assign(document.createElement('div'),
                    {
                    classList: 'book-card'
                    })
    const bookInfo = Object.assign(document.createElement('div'),
                    {
                    classList: 'book-info-container'
                    })
    const title = Object.assign(document.createElement('p'),
                    {
                    classList: 'book-title',
                    textContent: `${book.title}`
                    })
    const author = Object.assign(document.createElement('p'),
                    {
                    classList: 'book-author',
                    textContent: `${book.author}`
                    })
    const pagecount = Object.assign(document.createElement('p'),
                    {
                    classList: 'book-pagecount',
                    textContent: `${book.pagecount}`
                    })
    const cardButtons = Object.assign(document.createElement('div'),
                    {
                    classList: 'card-btn-container'
                    })
    const bookReadStatusBtn = Object.assign(document.createElement('button'),
                    {
                    classList: 'btn btn-read-status',
                    onclick: toggleReadStatus
                    })
    const removeBookBtn = Object.assign(document.createElement('button'),
                    {
                    classList: 'btn btn-remove-book',
                    onclick: removeBook,
                    textContent: 'Remove'
                    })

    //append works similarly to appendChild but accepts multiple arguments
    bookInfo.append(title, author, pagecount)
    cardButtons.append(bookReadStatusBtn, removeBookBtn)
    bookCard.append(bookInfo, cardButtons)
    libraryGrid.append(bookCard)
}


// Internals
let myLibrary = [];

function Book(title = 'Unknown  Title', author = 'Anonymous', pagecount = 999) {
    this.title = title
    this.author = author
    this.pagecount = pagecount
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function removeBookFromLibraryByTitle (bookTitle) {
    myLibrary = myLibrary.filter((libBook) => libBook.title !== bookTitle);
}

function removeBookFromLibraryByIndex (bookIndex) {
    myLibrary = myLibrary.filter((libBook) => myLibrary.indexOf(libBook) !== bookIndex)
}

function createBook (title, author, pagecount) {
    // const newBook = new Book(name, author, pagecount);
    // return newBook;
    return new Book(title, author, pagecount); // Has the same output
}

function toggleReadStatus () {

}

function removeBook () {

}
// TEST STUFF
clearLibraryGrid();
const myBook = createBook('Lord of the Rings', 'J.R.R. Tolkien', '456');
let aBook = createBook('Cooking for Dummies', 'John Adams', '123');
let bBook = createBook();

addBookToLibrary(myBook);
addBookToLibrary(aBook);
addBookToLibrary(bBook);

updateLibraryGrid();

//removeBookFromLibraryByIndex(0);

console.log();