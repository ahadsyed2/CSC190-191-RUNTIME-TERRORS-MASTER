

//NEW 3/8
import { config as dotenvConfig } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userrouter from './routes/userRoutes.js';
import postingRoutes from './routes/postingRoutes.js';
import postRoutes from './routes/postRoutes.js'; // Assuming postRoutes is CommonJS
import profileRoutes from './routes/profileRoutes.js'; // Assuming profileRoutes is CommonJS
import vehicleRoutes from './routes/vehicleRoutes.js'

dotenvConfig();


//express app
const app = express()

///middleware, parse json body for post request
//app.use(express.json())

// Middleware to parse JSON body for POST requests with a limit of 20MB
app.use(express.json({ limit: '20mb' }));

// Middleware to parse URL-encoded bodies for POST requests with a limit of 20MB
app.use(express.urlencoded({ limit: '20mb', extended: true }));






app.use((req, res, next) => {
    //LOG PATH AND REQUEST TYPE
    console.log(req.path, req.method)
    next()
})


//routes, fires router (carmonyRoutes) from carmonyRoutes file

//WHY DOESN"T THIS WORK. Git Push destroyed my thing

//recieve and execute requests
app.use('/api/userRoutes', userrouter)

//recieve and execute requests from posting page
app.use('/api/postingRoutes', postingRoutes)

//recieve and execute requests from posting page
app.use('/api/postRoutes', postRoutes)
 
//recieve and execute requests from profile page
app.use('/api/profile', profileRoutes) //Does this need to be profileRoutes?

//recieve and execute requests from profile page
app.use('/api/vehicleRoutes', vehicleRoutes)

//app.get('/', (req,res) => {


// Middleware to parse JSON body for POST requests
app.use(express.json());

// Routes
app.use('/api/userRoutes', userrouter);
app.use('/api/postingRoutes', postingRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/postRoutes', postRoutes); //I used this for home page -Nick




// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('CONNECTED. Listening on port 4k')
    })
  })
  .catch((error) => {
    console.log(error);
  })
