const express = require("express");
const router = express.Router();
const { getAllBooks, createBook, deleteBook } = require("../controllers/book");

router.get("/", getAllBooks);
router.post("/create-book", createBook);
router.delete("/delete-book", deleteBook);

module.exports = router;
