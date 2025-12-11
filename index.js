require("dotenv").config();
const express = require('express');
const app = express();
const { connectionToDB } = require("./config/dbConfig");
const { sequelize } = require("./model");
// const { sequelize } = require("./models");
const searchRoutes = require("./routes/searchRoutes");
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use("/search", searchRoutes);


app.post("/create", async (req, res) => {
    const { firstName, email, password } = req.body;
    try {
        const user = await User.create({ firstName, email, password });
        return res.status(201).send({ error: false, items: user });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
})

sequelize.authenticate().then(() => {
    console.log("Database Connected");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.listen(8080, async () => {
//     await connectionToDB()
//     console.log('Server is running at port 8080')
// })