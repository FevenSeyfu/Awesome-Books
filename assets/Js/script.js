// const addBookBtns = document.getElementById('add-btn');
const removeBookBtns = document.querySelectorAll('.remove-btn');
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
// function removeBooks(index) {
//   bookStorage.splice(index, 1);
// }
// event listener for remove button
removeBookBtns.forEach((removeBookBtn) => {
  removeBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // const id = e.target.parentNode.getAttribute('data-id');
    // removeBooks();
  });
});