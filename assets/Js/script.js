const removeBookBtns = document.querySelectorAll('.remove-btn');
const title = document.getElementById('title');
const author = document.getElementById('author');
const listContainer = document.getElementById('display-book-list');
const addbookForm = document.getElementById('add-form');
const bookStore = [];

// Add books and store in localstorage
function addBooks() {
  const Book = {
    title: title.value,
    author: author.value,
  };
  bookStore.push(Book);
  const jsonData = JSON.stringify(bookStore);
  window.localStorage.setItem('books', jsonData);
}
//  add book button event listener
addbookForm.addEventListener('submit', addBooks);

// display books collection
function fetchData() {
  const BooksList = localStorage.getItem('books');
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

window.onload = () => {
  fetchData();
};

// remove book from list(author,title)
function removeBooks(index) {
  bookStore.splice(index, 1);
}
// event listener for remove button
removeBookBtns.forEach((removeBookBtn) => {
  removeBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.parentNode.getAttribute('data-id');
    removeBooks(id);
  });
});