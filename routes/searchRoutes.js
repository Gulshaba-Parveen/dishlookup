const express = require("express");
const router = express.Router();
const { Restaurant, MenuItem, Order } = require("../model");
const { sequelize } = require("../model");

router.get("/dishes", async (req, res) => {
    const { name, minPrice, maxPrice } = req.query;

    if (!name || !minPrice || !maxPrice) {
        return res.status(400).json({ message: "name, minPrice and maxPrice are required" });
    }

    try {
        const results = await sequelize.query(
            `
      SELECT 
        r.id AS restaurantId,
        r.name AS restaurantName,
        r.city AS city,
        m.dishName AS dishName,
        m.price AS dishPrice,
        COUNT(o.id) AS orderCount
      FROM MenuItems m
      JOIN Restaurants r ON r.id = m.restaurant_id
      LEFT JOIN Orders o ON o.menu_item_id = m.id
      WHERE LOWER(m.dishName) LIKE LOWER(:name)
      AND m.price BETWEEN :minPrice AND :maxPrice
      GROUP BY r.id, m.id
      ORDER BY orderCount DESC
      LIMIT 10;
      `,
            {
                replacements: {
                    name: `%${name}%`,
                    minPrice,
                    maxPrice
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        res.json({ restaurants: results });
    } catch (error) {
        console.error("API ERROR:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
