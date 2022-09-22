const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Configure cors
app.use(cors());

// Configure Express to receive the form data
app.use(express.json());

// Configure dotEnv file
dotEnv.config({path : './.env'});

const hostname = process.env.LOCAL_HOST_NAME;
const port = process.env.LOCAL_PORT;

// Connect to mongo DB server
mongoose.connect(process.env.MONGO_DB_URL, {
    useFindAndModify : false,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then((response) => {
    console.log('Connected to mongo DB Successful............');
}).catch((error) => {
    console.error(error);
    port.exit(1);
});

// basic request
app.get('/', (request, response) => {
    response.send(`Welcome to Events Booking App`);
});