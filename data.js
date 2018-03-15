//Creates the database
const db = db.getSiblingDB('webtask');

// delete any data that was there already
db.dropDatabase();

//the data thats going to be inserted
const car = {
    model: "Volkswagen Passat",
    year: 2014,
    price: "$11,700 - $13,000",
    mileage: "33,152",
    itemNumber: 2000112429,
    vinNumber: "1VWAS7A32EC057545",
    cylinders: 4,
    cityMPG: 24,
    highwayMPG: 34,
    engine: "4-Cylinder Turbo",
}

//insers the data into the collection
db.cars.insert(car);
