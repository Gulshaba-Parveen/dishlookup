const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Restaurant = sequelize.define("Restaurant", {
    name: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Restaurant;
