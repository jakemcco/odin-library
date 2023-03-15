const libraryGrid = document.getElementById('library-grid');
const addBookForm = document.getElementById('add-book-form');

addBookForm.onsubmit = userAddBook

function userAddBook (e) {
    e.preventDefault()
    const newBook = createBookFromUserInput()
    newLib.addBook(newBook);
    updateLibraryGrid()
    addBookForm.reset()
}

function createBookFromUserInput () {
    const title = document.getElementById('add-book-title').value
    const author = document.getElementById('add-book-author').value
    const pageCount = document.getElementById('add-book-pagecount').value
    const isReadStatus = document.getElementById('add-book-is-read-status').value

    return createBook(title, author, pageCount);
}

function removeBook (e) {
    newLib.removeBookByTitle (e.target.value);
    updateLibraryGrid()
}

function clearLibraryGrid() {
    libraryGrid.innerHTML = ''
}

//Naive approach to simply clear and re-create library each time
function updateLibraryGrid() {
    clearLibraryGrid();
    for (let book of newLib.collection) {
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
    const cardDividerH = Object.assign(document.createElement('div'),
                    {
                    classList: 'card-divider-h'
                    })
    const author = Object.assign(document.createElement('p'),
                    {
                    classList: 'book-author',
                    textContent: `${book.author}`
                    })
    const pageCount = Object.assign(document.createElement('p'),
                    {
                    classList: 'book-pagecount',
                    textContent: `${book.pageCount} pages`
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
                    textContent: 'Remove',
                    value: book.title
                    })

    //append works similarly to appendChild but accepts multiple arguments
    bookInfo.append(title, cardDividerH, author, pageCount)
    cardButtons.append(bookReadStatusBtn, removeBookBtn)
    bookCard.append(bookInfo, cardButtons)
    libraryGrid.append(bookCard)
}


// Internals
class Library {
    constructor(){
        this.collection = [];
    }

    addBook (book) {
        const bookClone = book.clone();
        this.collection.push(bookClone);
    }

    removeBookByIndex (index) {
        this.collection = this.collection.filter((libBook) => this.collection.indexOf(libBook) !== index);
    }

    removeBookByTitle (bookTitle) {
        this.collection = this.collection.filter((libBook) => libBook.title !== bookTitle);
    }

};

class Book {
    constructor(title = 'Unknown Title', author = 'Anonymous', pageCount = 999){
        this.title = title
        this.author = author
        this.pageCount = pageCount
    }

    clone () {
        const clone = new Book();
        clone.title = this.title;
        clone.author = this.author;
        clone.pageCount = this.pageCount;
        return clone;
    }    
}

function createBook (title, author, pageCount) {
    return new Book(title, author, pageCount); // Has the same output
}

function toggleReadStatus () {
}


// TEST STUFF
//Test timer for logging stuff

const newLib = new Library;
clearLibraryGrid();

const myBook = createBook('Lord of the Rings', 'J.R.R. Tolkien', '456');
const aBook = createBook('Cooking for Dummies', 'John Adams', '123');
const bBook = createBook();

newLib.addBook(myBook);
newLib.addBook(aBook);
newLib.addBook(bBook);

updateLibraryGrid();