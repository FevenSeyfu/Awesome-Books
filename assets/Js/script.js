const title = document.getElementById('title');
const author = document.getElementById('author');
const listContainer = document.getElementById('display-book-list');
const addbookForm = document.getElementById('add-form');
const bookStorage = [];

// Add books and store in localstorage
function addBooks() {
  const storedData = JSON.parse(localStorage.getItem('StoreBook')) || [];
  const Book = {
    title: title.value,
    author: author.value,
  };
  bookStorage.push(Book);
  storedData.push(Book);
  localStorage.setItem('StoreBook', JSON.stringify(storedData));
  window.location.reload();
}
//  add book button event listener
addbookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBooks();
});

// display books collection
function fetchData() {
  const BooksList = localStorage.getItem('StoreBook');
  const parseBooksList = JSON.parse(BooksList);
  parseBooksList.forEach((book) => {
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
window.addEventListener('load', (e) => {
  e.preventDefault();
  fetchData();
});

// remove book from list(author,title)
function removeBooks(title) {
  let BooksList = localStorage.getItem('StoreBook');
  BooksList = JSON.parse(BooksList);
  const index = BooksList.findIndex((book) => book.title === title);
  BooksList.splice(index, 1);
  localStorage.setItem('StoreBook', JSON.stringify(BooksList));
  window.location.reload();
}

// event listener for remove button
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    e.preventDefault();
    const ul = e.target.parentNode;
    const title = ul.firstChild.innerText;
    removeBooks(title);
  }
});
