const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema({
  picture: {
    type: Image,
    required: false
  },
  display_name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  contact_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })


module.exports = mongoose.model('Profile', profileSchema)
