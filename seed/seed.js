const { sequelize, Restaurant, MenuItem, Order } = require("../model");

async function seed() {
    await sequelize.sync({ force: true });

    const restaurants = await Restaurant.bulkCreate([
        { name: "Hyderabadi Spice House", city: "Hyderabad" },
        { name: "Paradise Biryani", city: "Hyderabad" },
        { name: "Mehfil Restaurant", city: "Hyderabad" },
        { name: "Biryani Pot", city: "Bangalore" },
        { name: "Empire Restaurant", city: "Bangalore" }
    ]);

    const menuItems = await MenuItem.bulkCreate([
        { restaurant_id: 1, dishName: "Chicken Biryani", price: 220 },
        { restaurant_id: 1, dishName: "Mutton Biryani", price: 300 },
        { restaurant_id: 1, dishName: "Paneer Biryani", price: 200 },
        { restaurant_id: 2, dishName: "veg Biryani", price: 180 },
        { restaurant_id: 3, dishName: "Idli", price: 180 },
        { restaurant_id: 3, dishName: "Paneer Biryani", price: 280 },
        { restaurant_id: 4, dishName: "Dosa", price: 300 },
        { restaurant_id: 5, dishName: "Parota", price: 270 }
    ]);

    for (let i = 0; i < 30; i++) await Order.create({ restaurant_id: 1, menu_item_id: 1 });
    for (let i = 0; i < 15; i++) await Order.create({ restaurant_id: 1, menu_item_id: 2 });
    for (let i = 0; i < 12; i++) await Order.create({ restaurant_id: 1, menu_item_id: 3 });
    for (let i = 0; i < 20; i++) await Order.create({ restaurant_id: 2, menu_item_id: 4 });
    for (let i = 0; i < 18; i++) await Order.create({ restaurant_id: 3, menu_item_id: 5 });
    for (let i = 0; i < 10; i++) await Order.create({ restaurant_id: 3, menu_item_id: 6 });
    for (let i = 0; i < 8; i++) await Order.create({ restaurant_id: 4, menu_item_id: 7 });
    for (let i = 0; i < 13; i++) await Order.create({ restaurant_id: 5, menu_item_id: 8 });


    console.log("Seeding Completed");
    process.exit();
}

seed();
