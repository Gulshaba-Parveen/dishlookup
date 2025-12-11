const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const MenuItem = sequelize.define("MenuItem", {
    restaurant_id: { type: DataTypes.INTEGER, allowNull: false },
    dishName: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = MenuItem;
