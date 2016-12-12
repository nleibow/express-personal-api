//This file allows us to seed our application with data
//simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var Place = require('./models/places.js')

var new_place = {place: " new yoooork"};



var allPlaces = [
{
    place: "denver",
    address: "its denver go look at a map"
  },
  {
    place: "new york",
    address: "its new york go look at a map"
  },
  {
    place: "california",
    address: "its california go look at a map"
  },
  ];





db.Place.create(allPlaces, function(err, place){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new place", place._id)
  process.exit(); // we're all done! Exit the program.
})

module.exports = allPlaces;
