const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Not Currently in use

const additionalSchema = new Schema({
  transmission: {
    type: String,
    required: true
  },
  drivetrain: {
    type: String,
    required: true
  },
  crylinder_count: {
    type: String,
    required: true
  },
  title_status: {
    type: String,
    required: true
  },
  primary_color: {
    type: String,
    required: true
  },
  secondary_color: {
    type: String,
    required: false
  },
  interior_color: {
    type: String,
    required: false
  },
  body_style: {
    type: String,
    required: true
  },
  fuel_type: {
    type: String,
    required: true
  },
  seat_count: {
    type: String,
    required: true
  },
  features: [{
    type: String,
    required: false
  }],
  mpg: {
    type: String,
    required: false
  },
}, { timestamps: true })


module.exports = mongoose.model('Post', additionalSchema)
