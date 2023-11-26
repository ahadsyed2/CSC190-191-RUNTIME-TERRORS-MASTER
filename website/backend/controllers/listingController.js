const Listing = require('../models/listingModel')
const mongoose = require('mongoose')

// get all listings
const getListings = async (req, res) => {
  const listings = await Listing.find({}).sort({createdAt: -1})

  res.status(200).json(listings)
}

// get a single Listing
const getListing = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such listing'})
  }

  const listing = await Listing.findById(id)

  if (!listing) {
    return res.status(404).json({error: 'No such listing'})
  }

  res.status(200).json(listing)
}

// create a new Listing
const createListing = async (req, res) => {
  const {make, model, year, mileage, price} = req.body

  let emptyFields = []

  if (!make) {
    emptyFields.push('make')
  }
  if (!model) {
    emptyFields.push('model')
  }
  if (!year) {
    emptyFields.push('year')
  }
  if (!mileage) {
    emptyFields.push('mileage')
  }
  if (!price) {
    emptyFields.push('price')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const user_id = req.user._id
    const listing = await Listing.create({ make, model, year, mileage, price })
    res.status(200).json(listing)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Listing
const deleteListing = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such listing'})
  }

  const listing = await Listing.findOneAndDelete({_id: id})

  if(!listing) {
    return res.status(400).json({error: 'No such listing'})
  }

  res.status(200).json(listing)
}

// update a listing
const updateListing = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such listing'})
  }

  const listing = await Listing.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!listing) {
    return res.status(400).json({error: 'No such listing'})
  }

  res.status(200).json(listing)
}

module.exports = {
  getListings,
  getListing,
  createListing,
  deleteListing,
  updateListing
}