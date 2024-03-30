import mongoose from 'mongoose';

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
    type: String,
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
    type: String, // You might store the URL or file path of the uploaded image
    //required: true,
  },
  fuel: {
    type: String, // You might store the URL or file path of the uploaded image
    //required: true,
  },
  transmission: {
    type: String, // You might store the URL or file path of the uploaded image
    //required: true,
  },
  condition: {
    type: String, // You might store the URL or file path of the uploaded image
    //required: true,
  },
  color: {
    type: String, // You might store the URL or file path of the uploaded image
    //required: true,
  },
  cylinders: {
    type: String, // You might store the URL or file path of the uploaded image
    //required: true,
  },
  features: {
    type: String, // You might store the URL or file path of the uploaded image
    //required: true,
  },
  timestamp: {
    type: String,
  },
  user: {
    type: String,
  }
});

const Posting = mongoose.model('Posting', postingSchema);

export default Posting  ; 
