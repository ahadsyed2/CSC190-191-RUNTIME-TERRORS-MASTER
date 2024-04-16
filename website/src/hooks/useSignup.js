import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, firstname, lastname, userlocation) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://api-carmony-onrender-com.onrender.com/api/userRoutes/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password, firstname, lastname, userlocation })
            });

            const json = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
            }

            if (response.ok) {
                setIsLoading(false);

                // Save user to local storage with jwebtoken and email
                localStorage.setItem('user', JSON.stringify(json));

                // Update auth context
                dispatch({ type: 'LOGIN', payload: json });

                // Redirect to home page
                window.location.href = "https://yourfrontenddomain.com/"; // Replace with your actual frontend domain
            }
        } catch (error) {
            setIsLoading(false);
            setError(error.message || 'An unexpected error occurred');
        }
    };

    return { signup, isLoading, error };
};
