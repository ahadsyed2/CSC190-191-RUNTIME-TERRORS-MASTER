//require('dotenv').config()
//const express = require('express')
//const mongoose = require('mongoose')
//const userRoutes = require ('./routes/userRoutes')
//const postingRoutes = require('./routes/postingRoutes')
//const postRoutes = require('./routes/postRoutes');
//const profileRoutes = require('./routes/profileRoutes');

//NEW 3/8
import { config as dotenvConfig } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userrouter from './routes/userRoutes.js';
import postingRoutes from './routes/postingRoutes.js';
import postRoutes from './routes/postRoutes.js'; // Assuming postRoutes is CommonJS
import profileRoutes from './routes/profileRoutes.js'; // Assuming profileRoutes is CommonJS

dotenvConfig();

//


//express app
const app = express()

//middleware, parse json body for post request
app.use(express.json())


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
app.use('/api/profile', profileRoutes)

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

