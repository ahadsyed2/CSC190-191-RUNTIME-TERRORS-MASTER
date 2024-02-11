import { createContext, useReducer, useEffect} from 'react'

export const ProfileContext = createContext()

//Typically check what action is in this function
//Action type and action data come from dispatch
export const profileReducer = (state, action) => {
  switch (action.type){
    case 'SET_PROFILES':
      return {
        profiles: action.payload
      }
    case 'CREATE_PROFILE':
      return {
        //returning payload (new profile data), along with the previous state
        // and the data in that state (which is what state.profiles should mean)
        //New data is the first in the array
        profiles: [action.payload, ...state.profiles]
      }
    default:
      //Don't change anything, keep state as it was
      return state
  }
}

export const ProfileContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(profileReducer, {
    profiles: null
  })

  //dispatch({type: 'getAllProfiles', payload: [{}, {}, {}, ...]})


//Children = Root App Component (Assuming no change to index.js wrapping)
  return (
    <ProfileContext.Provider value={{...state, dispatch}}>
      { children } 
    </ProfileContext.Provider>
  )
}