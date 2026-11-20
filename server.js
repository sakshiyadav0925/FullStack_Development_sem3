// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Define port number
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Create a basic route
app.get('/', (req, res) => {
    res.send("Welcome to Employee Leave Management API");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});