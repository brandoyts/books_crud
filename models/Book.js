const Sequelize = require("sequelize");
const db = require("../config/database");

const Book = db.define("Books", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING(255),
    description: Sequelize.STRING(255),
    author_id: {
        type: Sequelize.INTEGER,
        references: {
            model: "authors",
            key: "id"
        }
    }
});

module.exports = Book;
