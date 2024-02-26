require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require ('./routes/userRoutes')
const postingRoutes = require('./routes/postingRoutes')
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');


const userRoutes = require('./routes/userRoutes');
const postingRoutes = require('./routes/postingRoutes');

//express app
const app = express()

// Middleware to log path and request type
app.use((req, res, next) => {
    //LOG PATH AND REQUEST TYPE
    console.log(req.path, req.method)
    next()
})


//routes, fires router (carmonyRoutes) from carmonyRoutes file

//WHY DOESN"T THIS WORK. Git Push destroyed my thing

//recieve and execute requests
app.use('/api/userRoutes', userRoutes)

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
app.use('/api/userRoutes', userRoutes);
app.use('/api/postingRoutes', postingRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/postRoutes', postRoutes); //I used this for home page -Nick




// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('CONNECTED. Listening on port 4k');
    });
  })
  .catch((error) => {
    console.log(error);
  });
