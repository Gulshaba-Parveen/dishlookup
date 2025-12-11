const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Order = sequelize.define("Order", {
    restaurant_id: { type: DataTypes.INTEGER, allowNull: false },
    menu_item_id: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Order;
