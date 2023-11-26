const express = require('express')
const {
  createListing,
  getListings,
  getListing,
  deleteListing,
  updateListing
} = require('../controllers/listingController')
//const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all workout routes
//router.use(requireAuth)

// GET all listings
router.get('/', getListings)

// GET a single listing
router.get('/:id', getListing)

// POST a new listing
router.post('/', createListing)

// DELETE a listing
router.delete('/:id', deleteListing)

// UPDATE a listing
router.patch('/:id', updateListing)

module.exports = router