const express = require("express");
const router = express.Router();
const { getAllAuthors } = require("../controllers/author");

router.get("/", getAllAuthors);

module.exports = router;
