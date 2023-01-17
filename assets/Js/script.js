const addBookBtn = document.getElementById('add-btn');
const removeBookBtns = document.querySelectorAll('.remove-btn');
const title = document.getElementById('title');
const author = document.getElementById('author');
const listContainer = document.getElementById('display-book-list');
const books = [
  {
    title: 'book one',
    author: 'daniel mistry',
  },
  {
    title: 'book two',
    author: 'book mistry',
  },
  {
    title: 'book three',
    author: 'author third',
  },
];

// remove book from list(author,title)
function removeBooks(index) {
  books.splice(index, 1);
}
// event listener for remove button
removeBookBtns.forEach((removeBookBtn) => {
  removeBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.parentNode.getAttribute('data-id');
    removeBooks(id);
  });
});

// display books collection
function displayBooksList() {
  // const books = Object.values('books');
  books.forEach((book) => {
    const bookList = document.createElement('ul');
    bookList.classList.add('book-list');
    listContainer.append(bookList);
    bookList.innerHTML = `<li class="book-title">${book.title}</li>
        <li class="book-author">${book.author}</li>
        <button class="remove-btn" type="reset">Remove</button>
        <hr>
      <li>`;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  displayBooksList();
});

// Add book to list ( author, title)
function addBooks(e) {
  // console.log('add');
  e.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  books.push(newBook);
  window.location.reload();
}
//  add book button event listener
addBookBtn.addEventListener('click', addBooks);