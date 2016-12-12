var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  place: String,
  address: String
});

var Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
