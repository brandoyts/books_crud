const Author = require("../models/Author");

exports.getAllAuthors = (req, res, next) => {
    Author.findAll()
        .then(authors =>
            res.json({
                status: 200,
                message: "success",
                data: authors
            })
        )
        .catch(err =>
            res.json({
                status: 404,
                message: err
            })
        );
};
