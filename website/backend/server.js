import { config as dotenvConfig } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userrouter from './routes/userRoutes.js';
import postingRoutes from './routes/postingRoutes.js';
import postRoutes from './routes/postRoutes.js'; // Assuming postRoutes is CommonJS
import profileRoutes from './routes/profileRoutes.js'; // Assuming profileRoutes is CommonJS
import vehicleRoutes from './routes/vehicleRoutes.js';
import path from 'path'; // Import path module

dotenvConfig();

// Express app
const app = express();

// Middleware to parse JSON body for POST requests with a limit of 20MB
app.use(express.json({ limit: '20mb' }));

// Middleware to parse URL-encoded bodies for POST requests with a limit of 20MB
app.use(express.urlencoded({ limit: '20mb', extended: true }));

// Serve static files from the React app
//If backend doesn't work remove this line
app.use(express.static(path.join(__dirname, 'client/build')));

// Log path and request type
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/userRoutes', userrouter);
app.use('/api/postingRoutes', postingRoutes);
app.use('/api/postRoutes', postRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/vehicleRoutes', vehicleRoutes);

// Handle React routing, return all requests to React app
//If backend doesn't work remove this line
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('CONNECTED. Listening on port 4k');
    });
  })
  .catch((error) => {
    console.log(error);
  });
