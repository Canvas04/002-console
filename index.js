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
app.use(express.json);

app.get('/api/books', (req, res) => {
    const {todo} = stor
    res.json(todo)
})

app.listen(PORT);
