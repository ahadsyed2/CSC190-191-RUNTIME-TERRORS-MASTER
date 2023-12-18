import { createContext, useReducer, useEffect} from 'react'

export const ProfileContext = createContext()


//This whole thing is unfinished

export const ProfileContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(profileReducer, {

  })
}

return (
  <ProfileContext.Provider value={{...state, dispatch}}>
    { children }
  </ProfileContext.Provider>
)