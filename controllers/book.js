const Sequelize = require("sequelize");
const Book = require("../models/Book");
const Author = require("../models/Author");

exports.getAllBooks = (req, res, next) => {
    Book.findAll()
        .then(books =>
            res.json({
                status: 200,
                message: "success",
                data: books
            })
        )
        .catch(err =>
            res.json({
                status: 404,
                message: err
            })
        );
};

exports.getBookAuthor = (req, res, next) => {
    Book.findAll({
        include: [
            {
                model: Author,
                where: { id: Sequelize.col("books.author_id") }
            }
        ]
    })
        .then(books =>
            res.json({
                status: 200,
                message: "success",
                data: books
            })
        )
        .catch(err =>
            res.json({
                status: 404,
                message: err
            })
        );
};
