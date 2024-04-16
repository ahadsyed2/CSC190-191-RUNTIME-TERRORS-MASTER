
import { useState } from 'react';

const usePosting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const createPosting = async (postData) => {
    setIsLoading(true);
    setError(null);

    try {
      const { image, ...jsonData} = postData;

      const response = await fetch('https://api-carmony-onrender-com.onrender.com/api/postingRoutes/Posting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create posting');
      }

      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error.message || 'An unexpected error occurred');
      return null;
    }
  };

  const AWSImageUpload = async (postData, id) => {
    setIsLoading(true);
    setError(null);

    try {
      const formID = id; 
      const imageFile = postData.image;
      
      const formDataWithImage = new FormData();
      formDataWithImage.append('image', imageFile);
      formDataWithImage.append('formID', formID);
      
      const imageResponse = await fetch('https://api-carmony-onrender-com.onrender.com/api/postingRoutes/UploadImage', {
        method: 'POST',
        body: formDataWithImage,
      });

      const imagedata = await imageResponse.json();

      if (!imageResponse.ok) {
        throw new Error(imagedata.error);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message || 'An unexpected error occurred');
      return null;
    }
  };

  return { createPosting, AWSImageUpload, isLoading, error };
};

export default usePosting;
