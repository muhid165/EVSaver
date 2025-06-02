const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}))

mongoose.connect(process.env.MONGO_URI,{

}).then(() => {
    console.log("Connected to the database succesfully ");
}).catch( err => {
    console.error("Error connecting to the database :",err);
});


app.get("/",(req,res) => {
    res.send('Hello, World!');
});



app.listen(PORT,() => {
    console.log(`server is running on port ${process.env.PORT}`);
});
