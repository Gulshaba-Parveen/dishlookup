const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Order = sequelize.define(
    "Order",
    {
        restaurant_id: { type: DataTypes.INTEGER, allowNull: false },
        menu_item_id: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
        indexes: [
            {
                name: "idx_order_menu_item",
                fields: ["menu_item_id"]
            },
            {
                name: "idx_order_restaurant",
                fields: ["restaurant_id"]
            }
        ]
    }
);

module.exports = Order;
