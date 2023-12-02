import { createContext, useReducer, useEffect} from 'react'

export const AuthContext = createContext()

//login and logout states
export const authReducer = (state,action) => {
    switch (action.type){
        case 'LOGIN':
            return { user: action.payload }
    
    case 'LOGOUT':
        return { user:null }
    
        default:
            return state

    }
}

export const AuthContextProvider = ({ children }) => {

    const [state,dispatch] = useReducer(authReducer ,{
    //not logged in
    user:null
})

//check local storage just once for if user is logged in
useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user){
        dispatch({type: 'LOGIN', payload: user})
    }
    
}, [])

console.log("AuthContext state: " , state)

return(
    <AuthContext.Provider value={{...state, dispatch}}>
        { children }
    </AuthContext.Provider>
)

}