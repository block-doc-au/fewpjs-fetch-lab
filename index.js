// const { returns } = require("chai-spies");

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(function(json){
    // console.log(`The JSON returned is : ${json}.`);
    return renderBooks(json);
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
