const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
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
  year: {
    type: Number,
    required: true
  },
  user_id: {
    type: String,
    required: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Listing', listingSchema)

//Potential other filters / schema info:
//Title status, cylinder count, transmission, drive-train, fuel type, condition
//Color, int color, body style
//Modification list, Known Flaw list, Features, Ownership History, Service History

//Need sellerID (Internal number) so site doesn't fetch personal info unless signed in and Recaptcha