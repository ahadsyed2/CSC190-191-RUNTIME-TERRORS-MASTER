require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require ('./routes/userRoutes')
const postingRoutes = require('./routes/postingRoutes')
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');


//express app
const app = express()

// Middleware to log path and request type
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

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

    //res.json({mssg:"welcome to the website"})

//})

//connect to db
mongoose.connect(process.env.MONGO_URI)
    //  once connected, listen for requests
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('CONNECTED. listening on port 4k')
        })
    })


    //if any error example wrong mongo uri
    .catch((error) =>{
        console.log(error)
    }
    )

