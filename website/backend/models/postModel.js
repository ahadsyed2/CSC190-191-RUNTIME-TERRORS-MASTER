const mongoose = require('mongoose');

<<<<<<< HEAD
const Schema = mongoose.Schema

  //Not currently in use


const postSchema = new Schema({
  title: {
=======
const postSchema = new mongoose.Schema({
  vehicleType: {
>>>>>>> main
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    //required: true,
  },
  year: {
    type: Number,
    //required: true,
  },
  price: {
    type: String,
    //required: true,
  },
  location: {
    type: String,
   //required: true,
  },
  description: {
    type: String,
    //required: true,
  },
  image: {
    type: String, // You might store the URL or file path of the uploaded image
    //required: true,
  },
  mileage: {
    type:String,
    //required: true
  }
});

module.exports = mongoose.model('Post', postSchema);