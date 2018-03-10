const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.get('./', (req, res)=>{
    res.send(consle.log('done'));
});

app.listen(5000, ()=>{
    console.log('app listening on port 5000');
})