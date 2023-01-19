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
      id: storedData.length + 1,
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
      const bookList = document.createElement('tr');
      bookList.classList.add('book-list');
      bookList.setAttribute('data-id', book.id);
      listContainer.append(bookList);
      bookList.innerHTML = `
          <td class="book-author col-1">"${book.title}" by ${book.author}</td>
          <td><button class="remove-btn col-2" type="reset">Remove</button></td>`;
    });
  }

  static removeBooks(x) {
    let BooksList = localStorage.getItem('StoreBook');
    BooksList = JSON.parse(BooksList);
    x = parseFloat(x);
    const index = BooksList.findIndex((book) => book.id === x);
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
    e.preventDefault();
    const row = e.target.parentNode.parentNode;
    const index = row.getAttribute('data-id');
    Book.removeBooks(index);
  }
});