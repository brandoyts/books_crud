const Sequelize = require("sequelize");
const db = require("../config/database");

const Author = db.define("author", {
    id: {
        type: Sequelize.INTEGER,
        allowNUll: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: Sequelize.STRING(100),
    lastName: Sequelize.STRING(100)
});

module.exports = Author;
