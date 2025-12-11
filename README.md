🍽️ Dish Lookup Backend Service
📌 Overview
This is a simple Node.js + MySQL backend service that allows users to search for restaurants based on a dish name. The system stores:

Restaurants

Their menu items

Orders placed for those items

When a user searches for a dish, the API returns the top 10 restaurants where that dish has been ordered the most, restricted by a mandatory price range filter.

🚀 Features
Search restaurants by dish name with price range filter

Returns restaurant details, dish name, dish price, and total order count

Seed file included with sample restaurants, dishes, and orders

Clean and well‑structured code using Sequelize ORM

Hosted on Railway/Render (include your live URL here)

🛠️ Tech Stack
Node.js (Express framework)

MySQL (database)

Sequelize (ORM)

⚙️ Setup Instructions
Clone the repository

bash
git clone https://github.com/<your-username>/dishlookup.git
cd dishlookup
Install dependencies

bash
npm install
Configure database connection

Create a .env file (do not commit this file)

Add your DB credentials:

Code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=dishlookup
DB_DIALECT=mysql
Run seed script to populate sample data

bash
node seed/seed.js
Start the server

bash
npm start
📡 API Usage
Endpoint
Code
GET /search/dishes?name=<dishName>&minPrice=<min>&maxPrice=<max>
Example Request
Code
/search/dishes?name=biryani&minPrice=150&maxPrice=300
Example Response
json
{
  "restaurants": [
    {
      "restaurantId": 5,
      "restaurantName": "Hyderabadi Spice House",
      "city": "Hyderabad",
      "dishName": "Chicken Biryani",
      "dishPrice": 220,
      "orderCount": 96
    }
  ]
}
📂 Project Structure
Code
dishlookup/
├── config/dbConfig.js
├── model/
│   ├── Restaurant.js
│   ├── MenuItem.js
│   ├── Order.js
│   └── index.js
├── routes/searchRoutes.js
├── seed/seed.js
├── index.js
└── package.json
🌐 Deployment
This project is hosted on [Railway/Render]. Public URL: <your-live-url-here>
