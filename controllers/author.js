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

exports.createAuthor = (req, res, next) => {
    const { firstname, lastname } = req.body;
    console.log(firstname, lastname);
    Author.create({ firstname, lastname })
        .then(() =>
            res.json({
                status: 201,
                message: "success"
            })
        )
        .catch(err =>
            res.json({
                status: 400,
                message: "fail",
                error: err
            })
        );
};

exports.deleteAuthor = (req, res, next) => {
    const id = req.body.id;
    Author.destroy({ where: { id } })
        .then(() => res.json({ status: 204 }))
        .catch(err =>
            res.json({
                status: 400,
                error: err
            })
        );
};

exports.updateAuthor = (req, res, next) => {
    const { id, firstname, lastname } = req.body;
    Author.update({ firstname, lastname }, { where: { id } })
        .then(() =>
            res.json({
                status: 200,
                message: "succcess"
            })
        )
        .catch(err =>
            res.json({
                status: 400,
                error: err
            })
        );
};
