//jshint esversion:6

const mongoose = require('mongoose');

//conection url
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true
});

// creating the scema, the model and the individual documents (js objects)
const fruitSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true, 'Please check data entry, name must be specified']
    }, 
    rating: {
        type: Number,
        min:1,
        max:10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    
    rating: 6,
    review: "i mean its an apple"
});

 
 //fruit.save();
// now we save this fruit document in to the Fruits collection in the fruitsDB


// making a new collection called people ( mongoose auto changes the plural in the name!!)
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});




const Person = mongoose.model("Person", personSchema);

const papaya = new Fruit ({
    name: 'Papaya',
    score:9,
    review: 'always weird and dehydrated in cereal your nan buys'
});
//papaya.save();

const banana = new Fruit ({
    name: 'Banana',
    score: 7,
    review: 'never taste as good as the foam sweets . . .'
});
banana.save();

Person.updateOne({name: 'John'}, {favouriteFruit: banana}, function (err){
    if (err) {
        console.log(err);
        
    } else {
        console.log('Banana engaged');
        
    }
});
const amy = new Person ({
    name: 'Amy',
    age:12,
    favouriteFruit: papaya
});

//amy.save();

const john = new Person({
    name: "John",
    age: 37
});

john.save();


 



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

// Editing a database entry......................

Fruit.updateOne({_id:"5cf933aa126ebd3f08fe65bc"}, {name:'pineapple'}, function(err){
    if (err) {
        console.log(err);
        
    } else {
        console.log('successfull update my dude');
        
    }
} );

//  Fruit.deleteOne({_id:'5cf9357a54ee6642a44e17c5'}, function (err) {
    
//  if (err) {
//     console.log(err);
    
// } else {
//     console.log('Woop Woop delete it');
// } 
// });

// Person.deleteMany({name: 'John'}, function (err) {
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('bye Johnny boy');
         
//     }
    
// });