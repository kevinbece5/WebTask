const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    model:{
        type: string,
        trim: true,
        isRequired: true,
    },
    year:{
        type: number,
        trim: true,
        isRequired: true,
    },
    price:{
        type: number,
        trim: true,
        isRequired: true,
    },
    mileage:{
        type: number,
        trim: true,
        isRequired: true,
    },
    itemNumber:{
        type: number,
        trim: true, 
        isRequired: true,
    },
    vinNumber:{
        type: number,
        trim: true,
        isRequired: true,
    },
    cylinders:{
        type: string,
        trim: true,
        isRequired: true,
    },
    cityMPG:{
        type: number,
        trim: true,
        isRequired: true,
    },
    highwayMPG:{
        type: number,
        trim: true,
        isRequired: true,
    },
    engine:{
        type: string,
        trim:true,
        isRequired: true,
    },

})

const car = mongoose.model('car', carSchema);
module.exports = car;