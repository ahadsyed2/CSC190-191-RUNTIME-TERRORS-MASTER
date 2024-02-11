require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const postingRoutes = require('./routes/postingRoutes');

const app = express();

// Middleware to log path and request type
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

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
