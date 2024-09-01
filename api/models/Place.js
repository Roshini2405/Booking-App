const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    title: String,
    address: String,
    photos: [Strings],
    description: String,
    perks:[String],
    extraInfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuest: Number,

})


const PlaceModel = mongoose.model('Place' , placeSchema);

module.exports = PlaceModel;