const express = require('express');
const morgan = require('morgan');

const PORT = 5000;

const app = express();
app.use(morgan('dev'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const books = {
  3: {
    id: 3,
    author: 'Jane Austen',
    title: 'Pride and Prejudice',
    language: 'English',
    year: 1813
  },
  4: {
    id: 4,
    author: 'Victor Hugo',
    title: 'The Hunchback of Notre-Dame',
    language: 'French',
    year: 1831
  },
};

// BROWSE/LIST all books
app.get('/books', (req, res) => {
  const templateVars = { books: books };
  res.render("index", templateVars);
});


// ACCESS/READ one single book
app.get('/books/:id', (req, res) => {
  const templateVars = {
    id: req.params.id,
    book: books[req.params.id]
  };
  res.render("book", templateVars);
});

// CREATE/ADD one single book => save this new book from user data into my "books" collection
app.post('/books', (req, res) => {
  console.log(req.body);
  const id = nextId();
  const newBook = {
    id: id,
    language: req.body.language,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  }

  books[id] = newBook; // 5

  res.redirect(`/books`);
});

// EDIT a book
app.post('/books/:id', (req, res) => {
  const bookId = req.params.id;
  books[bookId].year = req.body.year;

  res.redirect(`/books/${bookId}`);
});

// DELETE a book
app.post('/books/:id/delete', (req, res) => {
  delete books[req.params.id];

  res.redirect(`/books`);
});



const nextId = () => {
  const keys = Object.keys(books);
  return Number(keys[keys.length-1]) + 1;
};

app.listen(PORT, () => {
  console.log(`This app is running on port ${PORT}`);
});