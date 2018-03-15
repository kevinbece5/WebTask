// shell
var db = db.getSiblingDB('webtask');

// delete any data that was there already
db.dropDatabase();

// create fake names for our users
    car = {
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
// insert the users into the database
// in the `users` collection
db.cars.insert(car);