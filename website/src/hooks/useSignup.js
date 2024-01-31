import { useState } from 'react'
import { useAuthContext} from './useAuthContext'

export const useSignup = () => {

    const[error,setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email,password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/userRoutes/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})

        })


        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok){
            //not loading anymore
            setIsLoading(false)

            //save user to local storage with jwebtoken and email
            localStorage.setItem('user', JSON.stringify(json))

            //update auth context
            dispatch({type: 'LOGIN', payload: json})

            //redirect to home page
            window.location.href = "http://localhost:3000/"
        }

        


    }

    return{ signup, isLoading, error}

}