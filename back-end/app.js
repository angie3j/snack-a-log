// DEPENDENCIES

const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
app.use(cors());

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.get('/', (_, response) => {
    response.status(200).send('Get Snack\'n at Snack-a-log!')
})

// EXPORT
module.exports = app;
