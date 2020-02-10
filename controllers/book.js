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

exports.createBook = (req, res, next) => {
    const { title, description, author_id } = req.body;
    Book.create({ title, description, author_id })
        .then(() => res.json({ status: 201 }))
        .catch(err => console.log(err));
};

exports.deleteBook = (req, res, next) => {
    const id = req.body.id;
    Book.destroy({ where: { id } })
        .then(() => res.json({ status: 204 }))
        .catch(err => json({ status: 400, error: err }));
};
