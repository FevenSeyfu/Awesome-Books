const title = document.getElementById('title');
const author = document.getElementById('author');
const listContainer = document.getElementById('display-book-list');
const addbookForm = document.getElementById('add-form');

class Book {
  constructor() {
    this.booksCollection = [];
  }

  addBooks() {
    const storedData = JSON.parse(localStorage.getItem('StoreBook')) || [];
    const newBook = {
      title: title.value,
      author: author.value,
    };
    this.booksCollection.push(newBook);
    storedData.push(newBook);
    localStorage.setItem('StoreBook', JSON.stringify(storedData));
    window.location.reload();
  }

  static displayList() {
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

  static removeBooks(title, author) {
    let BooksList = localStorage.getItem('StoreBook');
    BooksList = JSON.parse(BooksList);
    // eslint-disable-next-line max-len
    const index = BooksList.findIndex((book) => book.title === title && book.author === author);
    BooksList.splice(index, 1);
    localStorage.setItem('StoreBook', JSON.stringify(BooksList));
    window.location.reload();
  }
}

const newBook = new Book();

// add book method call
addbookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newBook.addBooks();
});

// diplay List method call
window.addEventListener('load', (e) => {
  e.preventDefault();
  Book.displayList();
});

// remove book from collection
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    // e.preventDefault();
    const ul = e.target.parentNode;
    const title = ul.firstChild.innerText;
    const author = ul.children.item(1).innerText;
    Book.removeBooks(title, author);
  }
});