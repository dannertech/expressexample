//import express
const express = require('express');
//create an instance of express, development standards normally use app as the instance name
const app = express();
//use the get method to set what happens when we hit a certain route or url endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});
//set the port that the app should listen to
app.listen(4000);