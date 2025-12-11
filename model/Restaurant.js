const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Restaurant = sequelize.define(
    "Restaurant",
    {
        name: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: false }
    },
    {
        indexes: [
            {
                name: "idx_restaurant_name",
                fields: ["name"]
            },
            {
                name: "idx_restaurant_city",
                fields: ["city"]
            }
        ]
    }
);

module.exports = Restaurant;
