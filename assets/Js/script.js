const addBookBtn = document.getElementById('add-btn');
const removeBookBtns = document.querySelectorAll('.remove-btn');
const title = document.getElementById('title');
const author = document.getElementById('author');

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

// Add book to list ( author, title)
function addBooks(e) {
  // console.log('add');
  e.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  books.push(newBook);
}

//  add book button event listener
addBookBtn.addEventListener('click', addBooks);

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