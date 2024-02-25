const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Not currently in use

const informationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  contact_email: {
    type: String,
    required: true
  },
  VIN: {
    type: String,
    required: true
  },
  last_online_date: {
    type: String,
    required: false
  }
}, { timestamps: true })


module.exports = mongoose.model('Information', informationSchema)
