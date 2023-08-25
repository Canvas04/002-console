const express = require("express");
const { v4: uuid } = require("uuid");

const { PORT } = require("./config.js");

class Book {
  constructor(
    id = uuid(),
    title = "",
    description = "",
    authors = "",
    favorite = "",
    fileCover = "",
    fileName = ""
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
  }
}

const stor = {
  books: [],
};

const app = express();
app.use(express.json());

app.post("/api/user/login", (req, res) => {
  res.status(201);
  res.json({ id: 1, mail: "test@mail.ru" });
});

app.get("/api/books", (req, res) => {
  const { books } = stor;
  console.log(books);
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  const { books } = stor;

  const { id } = req.params;

  const idx = books.findIndex((book) => book.id === id);

  if (idx !== -1) {
    res.json(books[idx]);
  } else {
    res.status(404);
    res.json("Книга не найдена");
  }
});


app.post("/api/books", (req, res) => {
  const { books } = stor;
  const { id, title, description, authors, favorite, fileCover, fileName } =
    req.body;

  const newBook = new Book(
    id,
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName
  );

  books.push(newBook);
  res.status(201);
  res.json(newBook);
});

app.put("/api/books/:id", (req, res) => {
  const { books } = stor;

  const { id } = req.params;
  const newBook = req.body;
  const idx = books.findIndex((book) => book.id === id);

  if (idx !== -1) {
    books[idx] = { ...books[idx], ...newBook };
    res.json(books[idx]);
  } else {
    res.status(404);
    res.json("Книга не найдена");
  }
});

app.delete("/api/books/:id", (req, res) => {
  const { books } = stor;

  const { id } = req.params;

  const idx = books.findIndex((book) => book.id === id);
  if (idx !== -1) {
    books.splice(idx, 1);
    res.json("ok");
  }
});

app.listen(PORT);
