import { useState } from 'react';

const usePosting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPosting = async (postData) => {
    setIsLoading(true);
    setError(null);

    try {
        //call on BACKEND 
      const response = await fetch('/api/postingRoutes/Posting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create posting');
      }

      setIsLoading(false);
      return data; // You can customize the return value based on your backend response structure
    } catch (error) {
      setIsLoading(false);
      setError(error.message || 'An unexpected error occurred');
      return null;
    }
  };

  return { createPosting, isLoading, error };
};

export default usePosting;
