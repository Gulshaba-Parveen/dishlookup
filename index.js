require("dotenv").config();
const express = require('express');
const app = express();
const { sequelize } = require("./model");
const searchRoutes = require("./routes/searchRoutes");
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use("/search", searchRoutes);

sequelize.authenticate().then(() => {
    console.log("Database Connected");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));