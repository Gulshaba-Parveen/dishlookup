# DishLookup

DishLookup is a Node.js + Express backend API with MySQL (Sequelize) that allows users to search for restaurants based on dish name and price range. It returns the **top 10 restaurants** where the dish is ordered the most.

---

## Features

- Search restaurants by dish name with mandatory price range
- Returns top 10 restaurants based on order count for the dish
- Each result includes:
  - Restaurant ID, name, and city
  - Dish name and price
  - Total order count

---

## Technologies

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- dotenv for environment variables

---

## Setup

1. Clone repository:

```bash
git clone https://github.com/Gulshaba-Parveen/dishlookup.git
cd dishlookup
Install dependencies:

bash
Copy code
npm install
Create a .env file in root:

env
Copy code
DB_HOST=<your-db-host>
DB_PORT=<your-db-port>
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>
DB_NAME=dishdb
DB_SSL=true
PORT=5000
Seed the database:

bash
Copy code
npm run seed
Start the server:

bash
Copy code
npm run server
Server runs on http://localhost:5000.

API
Search Dishes
sql
Copy code
GET /search/dishes
Query Parameters:

name (required) — dish name or part of it

minPrice (required) — minimum price

maxPrice (required) — maximum price

Example:

pgsql
Copy code
/search/dishes?name=biryani&minPrice=150&maxPrice=300
Response:

json
Copy code
{
  "restaurants": [
    {
      "restaurantId": 1,
      "restaurantName": "Hyderabadi Spice House",
      "city": "Hyderabad",
      "dishName": "Chicken Biryani",
      "dishPrice": 220,
      "orderCount": 30
    }
  ]
}
Deployment
Render: Connect GitHub, add environment variables, start command npm run start.

Railway: Connect GitHub, configure environment variables, start command node index.js.

Live URL: https://dishlookup-1.onrender.com

Scripts
npm run server – Start server with nodemon

npm run start – Start server (production)

npm run seed – Seed database
