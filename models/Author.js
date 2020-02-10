const Sequelize = require("sequelize");
const db = require("../config/database");

const Author = db.define("author", {
    id: {
        type: Sequelize.INTEGER,
        allowNUll: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: Sequelize.STRING(50),
    lastName: Sequelize.STRING(50)
});

module.exports = Author;
