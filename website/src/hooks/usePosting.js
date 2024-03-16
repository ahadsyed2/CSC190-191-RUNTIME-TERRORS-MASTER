import { useState } from 'react';

const usePosting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const createPosting = async (postData) => {
    setIsLoading(true);
    setError(null);

    try {
     
      // DESTRUCTURE: jsonData = postData - image attribute
      const { image, ...jsonData} = postData;

      //call on BACKEND to send all postData properties except image
      const response = await fetch('/api/postingRoutes/Posting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      const data = await response.json();
      console.log("DATA:" , data); 

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create posting');
      }

       //extract image file
       //const imageFile = postData.image
       //console.log("extracted image: ", imageFile)
       
       //const formDataWithImage = new FormData();
       //formDataWithImage.append('image', imageFile);
       
       //const imageResponse = await fetch('/api/postingRoutes/UploadImage', {
         //method: 'POST',
         //body: formDataWithImage, // Send image file separately
       //});
 
       // Check if the image upload was successful
     //if (!imageResponse.ok) {
       //throw new Error('Image upload failed');
     //}


      setIsLoading(false);
      return data;
       // You can customize the return value based on your backend response structure
    
    
    
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
    //extract image file
    const formID = id; 
    const imageFile = postData.image
    console.log("AWS extracted image: ", imageFile, "formID:", formID)
    
    const formDataWithImage = new FormData();
    formDataWithImage.append('image', imageFile);
    formDataWithImage.append('formID', formID);
    
    const imageResponse = await fetch('/api/postingRoutes/UploadImage', {
      method: 'POST',
      body: formDataWithImage, // Send image file separately
    });

    const imagedata = await imageResponse.json();

    // Check if the image upload was successful
  if (!imageResponse.ok) {
    
    throw new Error(imagedata.error);
  }




} catch (error) {
  setIsLoading(false);
  setError(error.message || 'An unexpected error occurred');
  return null;
}
  
  }
  




  return { createPosting, AWSImageUpload, isLoading, error };
};

export default usePosting;
