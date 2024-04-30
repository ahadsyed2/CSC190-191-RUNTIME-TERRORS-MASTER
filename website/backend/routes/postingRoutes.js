import { posting } from '../controllers/postingController.js';
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import AWS from 'aws-sdk';
import express from 'express';
import multer from 'multer';
import sharp from 'sharp';

// Set up multer storage with memory storage
const storage = multer.memoryStorage();

// Initialize multer with storage
const upload = multer({ storage });

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-1' // Set your desired AWS region
});

// Create an S3 client
const s3 = new S3Client();

// Create an Express router
const router = express.Router();

// Route for posting form data
router.post('/Posting', posting);

// Route for uploading images with resizing
router.post('/UploadImage', upload.single('image'), async (req, res) => {
  try {
    // Resize image using sharp
    const resizedImageBuffer = await sharp(req.file.buffer)
      .resize({ width: 800 }) // Adjust width as needed
      .toBuffer();

    // Get the form ID from the request body
    const key = req.body.formID;

    // Prepare the S3 command to put the resized image
    const command = new PutObjectCommand({
      Bucket: process.env.BUCKET,
      Key: key,
      Body: resizedImageBuffer,
      ContentType: req.file.mimetype,
    });

    // Send the command to S3
    await s3.send(command);

    console.log("Image upload success");
    return res.status(200).send('Image upload successful');
  } catch (error) {
    console.error("Error uploading image:", error);
    return res.status(500).send('Internal Server Error');
  }
});

export default router;
