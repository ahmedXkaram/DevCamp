const express = require('express');
const dotenv = require('dotenv');

// Requiring Routes
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path : './config/config.env'});
const app = express();

// Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is Running in ${process.env.NODE_ENV}....`);
})