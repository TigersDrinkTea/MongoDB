//jshint esversion:6

const mongoose = require('mongoose');

//conection url
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true
});

// creating the scema, the model and the individual documents (js objects)
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 6,
    review: "i mean its an apple"
});
// fruit.save();
// now we save this fruit document in to the Fruits collection in the fruitsDB


// making a new collection called people ( mongoose auto changes the plural in the name!!)
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});
// person.save();



// adding many documents at once
const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "exotic and delicious"
});

const lemon = new Fruit({
    name: "Lemon",
    score: 10,
    review: "cocktail fodder"
});

const peach = new Fruit({
    name: "Peach",
    score: 15,
    review: "the legend"
});

const coconut = new Fruit({
    name: "Coconut",
    score: 1,
    review: "Shampoo commericals"
});


// Fruit.insertMany([kiwi, lemon, peach, coconut], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved");
//     }
// });


// Accessing the data in the MongoDB in app.js
Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();
        
        fruits.forEach(function (fruit) {  // here we are cycling through the fruit array and just reading names with .notation
            console.log(fruit.name);
        });
    }
});