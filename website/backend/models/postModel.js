const mongoose = require('mongoose')

const Schema = mongoose.Schema

  //Not currently in use


const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  list_date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  vehicle_id: {
    type: String,
    required: true
  },
  seller_id: {
    type: String,
    required: true
  },
  pictures_array: [{
    type: String,
    required: false
  }],
  ownership: [{
    type: String,
    required: false
  }],
  service_history: [{
    type: String,
    required: false
  }],
  flaws: [{
    type: String,
    required: false
  }],
  additional: {
    type: String,
    required: false
  }
}, { timestamps: true })


module.exports = mongoose.model('Post', postSchema)
