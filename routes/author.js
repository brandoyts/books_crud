const express = require("express");
const router = express.Router();
const {
    getAllAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor
} = require("../controllers/author");

router.patch("/update-author", updateAuthor);
router.get("/", getAllAuthors);
router.delete("/delete-author", deleteAuthor);
router.post("/create-author", createAuthor);

module.exports = router;
