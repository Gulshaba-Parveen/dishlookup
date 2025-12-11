const Restaurant = require("./Restaurant");
const MenuItem = require("./MenuItem");
const Order = require("./Order");
const sequelize = require("../config/dbConfig");

Restaurant.hasMany(MenuItem, { foreignKey: "restaurant_id" });
MenuItem.belongsTo(Restaurant, { foreignKey: "restaurant_id" });

Restaurant.hasMany(Order, { foreignKey: "restaurant_id" });
Order.belongsTo(Restaurant, { foreignKey: "restaurant_id" });

MenuItem.hasMany(Order, { foreignKey: "menu_item_id" });
Order.belongsTo(MenuItem, { foreignKey: "menu_item_id" });

module.exports = {
    sequelize,
    Restaurant,
    MenuItem,
    Order
};
