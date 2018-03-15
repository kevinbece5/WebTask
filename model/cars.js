const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    model: {
        type: String,
        trim: true,
        isRequired: true,
    },
    year:{
        type: Number,
        trim: true,
        isRequired: true,
    },
    price:{
        type: String,
        trim: true,
        isRequired: true,
    },
    mileage:{
        type: String,
        trim: true,
        isRequired: true,
    },
    itemNumber:{
        type: Number,
        trim: true, 
        isRequired: true,
    },
    vinNumber:{
        type: String,
        trim: true,
        isRequired: true,
    },
    cylinders:{
        type: Number,
        trim: true,
        isRequired: true,
    },
    cityMPG:{
        type: Number,
        trim: true,
        isRequired: true,
    },
    highwayMPG:{
        type: Number,
        trim: true,
        isRequired: true,
    },
    engine:{
        type: String,
        trim:true,
        isRequired: true,
    },

})

const car = mongoose.model('car', carSchema);
module.exports = car;
module.exports.getCars = (callback, limit)=>{
    car.find(callback).limit(limit);
}
