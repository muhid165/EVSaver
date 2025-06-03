const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}))
app.use("/api/auth",authRoutes)



app.get("/",(req,res) => {
    res.send('Hello, World!');
});


module.exports = app;