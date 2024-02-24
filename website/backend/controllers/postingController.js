
const express = require('express');
const router = express.Router();
const Posting = require('../models/postingModel');
//const multer = require('multer');
//const multerS3 = require('multer-s3');
//const AWS = require('aws-sdk');

// Step 1: Configure AWS SDK
/* const s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
}); */

// Step 2: Configure multer-s3 to connect to the S3 client and create S3 storage for multer
/* const s3Storage = multerS3({
  s3: s3,
  bucket: process.env.S3_BUCKET_NAME,
  acl: 'public-read',
  key: (req, file, cb) => {
    const fileName = Date.now() + '-' + file.originalname;
    cb(null, 'uploads/' + fileName);
  },
});

const uploadImage = multer({
  storage: s3Storage,
  fileFilter: (req, file, callback) => {
    sanitizeFilter(file, callback)
  },
  limits: {
    fileSize: 1024 * 1024 * 2
  }
}).single('image'); // Single file upload middleware

// Sanitize file function
function sanitizeFilter(file, cb) {
  // Define the allowed extension
  const fileExts = [".png", ".jpg", ".jpeg", ".gif"];

  // Check allowed extensions
  const isAllowedExt = fileExts.includes(
    path.extname(file.originalname.toLowerCase())
  );
 */
  // Mime type must be an image
/*   const isAllowedMimeType = file.mimetype.startsWith("image/");

  if (isAllowedExt && isAllowedMimeType) {
    return cb(null, true); // no errors
  } else {
    // pass error msg to callback, which can be displayed in frontend
    cb("Error: File type not allowed!");
  }
} */


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
    } = req.body;

    console.log('posting function firing');

    const newPosting = new Posting({
      vehicleType,
      make,
      model,
      year,
      price,
      location,
      description,
      
    });



    // Save the document to the database
    const savedPosting = await newPosting.save();

    // Log the JSON information of the new posting
    console.log('New Posting:', savedPosting.toJSON());

    return res.status(201).json(savedPosting);


    // Use the 'uploadImage' middleware to handle the image upload
    //uploadImage(req, res, async (err) => {

      //if (err) {
        //console.error(err);
        //return res.status(500).json({ error: 'Image upload failed' });
      //}

      // If the image upload is successful and req.file is available
      //if (req.file) {
        // Access the file information
        //const imageUrl = req.file.location; // Assuming 'location' is the key where the S3 URL is stored

        // Create a new Posting document with the image URL
        

        
        // Respond with the saved posting
        
      //} else {
        // If req.file is not available (no file uploaded)
        //return res.status(400).json({ error: 'Image file not found in request' });
      //}
    
  } catch (error) {
    // Handle errors, e.g., validation errors or database errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { posting };


