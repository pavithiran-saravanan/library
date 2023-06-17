console.log('Working');

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
    
}

let book1 = new Book('Harry Potter', 'J K Rowling', 1529, false);
let book2 = new Book('City', 'Honda', 1821, false);
let book3 = new Book('Wings of Fire', 'A P J Abdul Kalam', 399, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

console.log(books);
