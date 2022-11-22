// server
const express = require('express');
const cors = require('cors');

//mongodb
const mongoose = require('mongoose');
//documents
const usersRouter = require('./routes/user')
// const productRouter = require('./routes/product')

require('dotenv').config();

// server
const app = express();
const port = process.env.PORT || 5000;
// mongodb
const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;

//server
app.use(cors());
app.use(express.json());
//mongodb
mongoose.connect(uri);

// mongodb listen for a one time event "open" and then turn off
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// mongodb paths
app.use('/user', usersRouter);
// app.use('/product', productRouter)

// listen for GETs on this port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});