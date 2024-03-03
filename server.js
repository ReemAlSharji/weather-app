// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express(); 

// Indicate port server will run at
const port = 8000;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server to run at port 8000
const server = app.listen(port, ()=> console.log(`server is running at port ${port}`));

// POST method route
app.post('/add', addInfo);

function addInfo(req, res) {
    projectData['date'] = req.body.date;
    projectData['temp'] = req.body.temp;
    projectData['content'] = req.body.content;
    res.send(projectData);
}

// Callback function to complete GET '/all'
app.get('/all', getInfo);

function getInfo(req, res) {
    res.send(projectData);
};