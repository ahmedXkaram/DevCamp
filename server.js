const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const error = require('./middlewares/error');

// Load env vars
dotenv.config({ path : './config/config.env'});

// Connect To DB
connectDB();

// Requiring Routes
const bootcamps = require('./routes/bootcamps');

const app = express();

// Middlewares
app.use(express.json());

// Routers
app.use('/api/v1/bootcamps', bootcamps);

// Middlewares
app.use(error);


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server is Running in ${process.env.NODE_ENV}....`.yellow.bold);
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
})