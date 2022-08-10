const express = require('express');
const app = express();
const mongoose = require('mongoose');
const infos = require('./Routes/info');
const cors = require('cors');
require('dotenv').config();

var PORT = process.env.PORT || 4000;


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api', infos);

app.use(cors());

//Connect to MongoDB atlas
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
})

    .then(() => {
        console.log("Connected to MongoDB Atlas");
    }).catch(err => {
        console.log(err + "Error connecting to MongoDB Atlas");
    })

app.listen((PORT), () => {
    console.log(`Server is running on port ${PORT}`);
})
