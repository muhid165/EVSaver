const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');
const stationRoutes = require('./routes/stationRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}))
app.use("/api/auth",userRoutes);
app.use("/api/stations",stationRoutes);


app.get("/",(req,res) => {
    res.send('Hello, World!');
});


module.exports = app;