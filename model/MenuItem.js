const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const MenuItem = sequelize.define(
    "MenuItem",
    {
        restaurant_id: { type: DataTypes.INTEGER, allowNull: false },
        dishName: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
        indexes: [
            {
                name: "idx_dishName",
                fields: ["dishName"]
            },
            {
                name: "idx_price",
                fields: ["price"]
            },
            {
                name: "idx_dishName_price",
                fields: ["dishName", "price"]
            },
            {
                name: "idx_menu_restaurant",
                fields: ["restaurant_id"]
            }
        ]
    }
);

module.exports = MenuItem;
