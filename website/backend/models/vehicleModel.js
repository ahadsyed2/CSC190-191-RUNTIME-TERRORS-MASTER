import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  fueltype: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  cylinders: {
    type: String,
    required: true,
  },
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
  description: {
    type: String,
    //required: true,
  },
  image: {
    type: String, // You might store the URL or file path of the uploaded image
    //required: true,
  },
});

const vehicle = mongoose.model('vehicle', VehicleSchema);

export default vehicle; 
