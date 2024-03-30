import { posting} from '../controllers/postingController.js';
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
//import { fromIni } from "@aws-sdk/credential-provider-node/dist-es/index.js"

import AWS from 'aws-sdk'; // Import the AWS SDK
//import { v4 as uuid } from "uuid";
import express from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

//AWS


AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-1' // Set your desired AWS region
});

const s3 = new S3Client();

//


const router = express.Router()
//*********ROUTES**********//

//posting route for form data minus image

//WORKING 
router.post('/Posting', posting)

//TEST


//TEST


//image posting route 
router.post('/UploadImage', upload.single('image'), async (req, res) =>  {

    //image file pulled from request body, parsed by multer ^
    const { file } = req;
    //folder name inside S3 bucket WITH UNIQUE ID ATTACKED UUID
    //const userId = 'testing2fuckyea'

    const key = req.body.formID;
    //const key = postId; 

    //console.log("testing id:", postId)

    //send key and image info (buffer and mimetype) to bucket
    const command = new PutObjectCommand({
      Bucket:process.env.BUCKET,
      Key:key,          
      Body: file.buffer,
      ContentType: file.mimetype,  });

      try {
        s3.send(command);
        console.log("image upload success")


    } catch (error) {
        console.log(error);
        return { error };
    }

    return res.status(200).send('image upload succesful')
    
  });


//module.exports = router
export default router;