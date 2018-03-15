const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Car = require('./model/cars');
const app = express();

mongoose.connect('mongodb://localhost/webtask');
const db = mongoose.connection;



app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/api/cars', (req,res)=>{
    Car.getCars((err, cars)=>{
        if(err){
            throw err
        }
        res.json(cars);
    })
});

app.listen(5000, ()=>{
    console.log('app listening on port 5000');
})