const mongoose = require('mongoose');

const postingSchema = new mongoose.Schema({
  vehicleType: {
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
    type: Number,
    //required: true,
  },
  location: {
    type: String,
   //required: true,
  },
  mileage: {
    type: Number,
   //required: true,
  },
  fuel: {
    type: String,
   //required: true,
  },
  transmission: {
    type: String,
   //required: true,
  },
  condition: {
    type: String,
   //required: true,
  },
  color: {
    type: String,
   //required: true,
  },
  cylinders: {
    type: String,
   //required: true,
  },
  features: {
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
});

const Posting = mongoose.model('Posting', postingSchema);

module.exports = Posting;
