//const express = require('express');
//const router = express.Router();
//const Posting = require('../models/postingModel');
//const multer = require('multer');
//const multerS3 = require('multer-s3');
//const AWS = require('aws-sdk');
import Posting from '../models/postingModel.js';




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
      mileage,
      gas,
      transmission,
      condition,
      color,
      cylinders,
      features,
      timestamp,
      user

    } = req.body;
  

    console.log('Posting function firing: '); 

    const newPosting = new Posting({
      vehicleType,
      make,
      model,
      year,
      price,
      location,
      description,
      image,
      mileage,
      gas,
      transmission,
      condition,
      color,
      cylinders,
      features,
      timestamp,
      user
      
    });



    // Save the document to the database
    const savedPosting = await newPosting.save();

    // Log the JSON information of the new posting
    //console.log('New Posting:', savedPosting.toJSON());
    const postId = savedPosting._id;
    console.log("New POST ID: " , postId)
    return res.status(201).json(savedPosting);

    


    
    //return { postId, savedPosting };
    
   
    
  } catch (error) {
    // Handle errors, e.g., validation errors or database errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  

};


//module.exports = { posting };
export { posting };