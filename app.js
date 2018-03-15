const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Car = require('./model/cars');
// const data = require('./data');

mongoose.connect('mongodb://localhost/webtask', (error) => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }
  
    // feed some dummy data in DB.
    // data();
  });
const db = mongoose.connection;


const app = express();

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