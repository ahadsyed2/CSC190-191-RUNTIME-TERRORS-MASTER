import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ProfileContextProvider } from './context/ProfileContext';
import { PostContextProvider } from './context/PostContext';
//import { VehicleContextProvider } from './context/VehicleContext';  



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProfileContextProvider>
       <PostContextProvider>
        {/*<VehicleContextProvider>*/}
          <App />
         {/*</VehicleContextProvider>*/}
       </PostContextProvider>
      </ProfileContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);