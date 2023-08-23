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

app.get("/api/books", (req, res) => {
  const { books } = stor;
  res.json(books);
});

app.post("/api/books", (req, res) => {
  const { books } = stor;
  const { id, title, description, authors, favorite, fileCover, fileName } =
    req.body;

  const newBook = new Book(
    id, title, description, authors, favorite, fileCover, fileName
  );

  books.push(newBook);
  res.status(201);
  res.json(newBook);
});


app.listen(PORT);
