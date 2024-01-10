// Import necessary modules
const express = require('express');
const router = express.Router();
const Posting = require('../models/postingModel'); // Adjust the path accordingly

// Route to handle the creation of a new posting
const posting = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      vehicleType,
      make,
      model,
      year,
      price,
      location,
      description,
      image,
    } = req.body;


    // Create a new Posting document
    const newPosting = new Posting({
      vehicleType,
      make,
      model,
      year,
      price,
      location,
      description,
      image,
    });

    // Save the document to the database
    const savedPosting = await newPosting.save();

    // Log the JSON information of the new posting
    console.log('New Posting:', savedPosting.toJSON());

    // Respond with the saved posting
    res.status(201).json(savedPosting);
  } catch (error) {
    // Handle errors, e.g., validation errors or database errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export the posting function to postingRoutes
module.exports = { posting };

