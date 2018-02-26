const dotenv = require("dotenv");
const express = require('express');
const morgan = require('morgan');
const axios = require("axios");
const app = express();
dotenv.config();
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get("/weather/:input", (req,res) => {
    var apiKey= process.env.apiKey;
    var input = req.params.input;
   axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=${apiKey}`)
    .then(Response => { 
        res.send(Response.data) 
    })
    .catch(err => res.status (500).send("bad"))
})


module.exports = app;
