// We are going to build a library of books
// Each book will be a book object
// We will have an array of books representing the library

/*

1. Create an array for storing books - books
2. Write a book constructor - Book
3. Create a function that takes a book object and adds it to the books array

4. Write a funciton that loops through the books in the array and displays on the page.
(We can display them in a table or a card)
5. Initially have a few books added to the array.

6. Add a 'New Book' button on the page that brings up a form allowing users to input the details of new book.
Book Details: Title, Author, No of pages, read?, etc..
(Use preventdefault to prevent the default form submission action)
7. Add a button on each book's display to remove the book from the library
For this we need to associate dom elements to the book object. One easy solution is to use data-index.
8. Add a button on each book's display to change it's read status. For this write a toggle function on the Book prototype.

*/

// Array of books
let books = [];

// Book object constructor
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Add toggleRead method to Book's prototype
Book.prototype.toggleRead = function(){
    this.isRead = !this.isRead;
}

// Function to add a book to library 
function addBookToLibrary(book){
    books.push(book);
}

// Function to iterate over books array and display each book as card
function displayBooks(){
    const container = document.querySelector('.books-container');
    for(let book of books){
        const card = document.createElement('div');
        card.classList.add('card');

        // Create book details and append to card
        const bookDetails = document.createElement('div');
        bookDetails.classList.add('book-details')

        const title = document.createElement('div');
        title.classList.add('title');
        title.innerText = book.title;

        const author = document.createElement('div');
        author.classList.add('author');
        author.innerText = book.author;

        bookDetails.appendChild(title);
        bookDetails.appendChild(author);
        card.appendChild(bookDetails);
        

        // Create pages and append to card
        const pages = document.createElement('div');
        pages.classList.add('pages');
        pages.innerText = book.pages;
        card.appendChild(pages);


        // Create buttons container and append to card
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('btn-container');

        const read = document.createElement('button');
        read.classList.add('btn', 'read');
        read.innerText = 'Read';
        card.appendChild(pages);
        const remove = document.createElement('button');
        remove.classList.add('btn', 'remove');
        remove.innerText = 'Remove';

        buttonContainer.appendChild(read);
        buttonContainer.appendChild(remove);
        card.appendChild(buttonContainer)

        container.appendChild(card);
    }
}

let book1 = new Book('Harry Potter', 'J K Rowling', 1529, false);
let book2 = new Book('City', 'Honda', 1821, false);
let book3 = new Book('Wings of Fire', 'A P J Abdul Kalam', 399, false);
let book4 = new Book('Harry Potter', 'J K Rowling', 1529, false);
let book5 = new Book('City', 'Honda', 1821, false);
let book6 = new Book('Wings of Fire', 'A P J Abdul Kalam', 399, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);

displayBooks();

const addBookButton = document.querySelector('.add-book');
const cancelButton = document.querySelector('.btn-cancel');
const body = document.querySelector('body');
const formBackground = document.querySelector('.form-background');
const formContainer = document.querySelector('.form-container');

addBookButton.addEventListener('click', toggleFormOverlay);
cancelButton.addEventListener('click', toggleFormOverlay);

function toggleFormOverlay(){
    body.classList.toggle('no-scroll');
    formBackground.classList.toggle('display');
    formContainer.classList.toggle('display');
}