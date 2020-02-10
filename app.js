require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// routes middleware
const book = require("./routes/book");
const author = require("./routes/author");

app.use("/api/v1/books", book);
app.use("/api/v1/authors", author);

module.exports = app;
