import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ProfileContextProvider } from './context/ProfileContext';
import { PostContextProvider } from './context/PostContext';
<<<<<<< HEAD
import { VehicleContextProvider } from './context/VehicleContext';  
=======
>>>>>>> main



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProfileContextProvider>
       <PostContextProvider>
<<<<<<< HEAD
        <VehicleContextProvider>
          <App />
        </VehicleContextProvider>
=======
        <App />
>>>>>>> main
       </PostContextProvider>
      </ProfileContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);