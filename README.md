# 🍽️ Dish Lookup Backend Service

# 📌 Overview
DishLookup is a Node.js + Express backend API with MySQL (Sequelize) that allows users to search for restaurants based on dish name and price range. It returns the **top 10 restaurants** where the dish is ordered the most.
## Live Project:
- https://dishlookup-1.onrender.com

## Example API Query:
- https://dishlookup-1.onrender.com/search/dishes?name=bir&minPrice=100&maxPrice=500
---

## 🚀 Features Available

- Search restaurants by dish name with price range filter
- Returns restaurant details, dish name, dish price, and total order count
- Seed file included with sample restaurants, dishes, and orders.
- Clean and well‑structured code using Sequelize ORM
- Hosted on Render

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL (database)
- Sequelize (ORM)
- dotenv for environment variables

---

## ⚙️ Setup Instructions

1. Clone repository:

```bash
git clone https://github.com/Gulshaba-Parveen/dishlookup.git
cd dishlookup
```

## Install dependencies:
```bash
npm install
```

## Create a .env file in the root directory with the following variables:
```bash
DB_HOST=<your-db-host>
DB_PORT=<your-db-port>
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>
DB_NAME=dishdb
DB_SSL=true
PORT=5000

```

## Seed the database:
```bash
npm run seed
```

## Start the server:
```bash
npm run server
```

Server runs on http://localhost:5000.

# API
## Search Dishes: 
- GET /search/dishes
## Query Parameters:
```bash
name (required) — dish name or part of it
minPrice (required) — minimum price
maxPrice (required) — maximum price
```

## Example:
- https://dishlookup-1.onrender.com/search/dishes?name=biryani&minPrice=150&maxPrice=300

## Response:
```bash
json
{
  "restaurants": [
    {
      "restaurantId": 1,
      "restaurantName": "Hyderabadi Spice House",
      "city": "Hyderabad",
      "dishName": "Mutton Biryani",
      "dishPrice": 300,
      "orderCount": 15
    }
  ]
}

```


## Deployment
- **Render**: Connect GitHub, add environment variables, start command npm run start.
- **Live URL**: https://dishlookup-1.onrender.com








