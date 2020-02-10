const express = require("express");
const router = express.Router();
const { getAllBooks, getBookAuthor } = require("../controllers/book");

router.get("/", getAllBooks);
router.get("/get-book-author", getBookAuthor);

module.exports = router;
