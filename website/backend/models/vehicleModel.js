const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vehicleSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  mileage: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  additional: {
    type: String,
    required: false
  }
}, { timestamps: true })


module.exports = mongoose.model('Vehicle', vehicleSchema)
