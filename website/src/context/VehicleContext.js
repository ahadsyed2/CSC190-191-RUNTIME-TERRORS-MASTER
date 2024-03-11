import { createContext, useReducer, useEffect} from 'react'

export const VehicleContext = createContext()

//Typically check what action is in this function
//Action type and action data come from dispatch
export const vehicleReducer = (state, action) => {
  switch (action.type){
    case 'SET_VEHICLES':
      return {
        vehicles: action.payload
      }
    case 'CREATE_VEHICLE':
      return {
        //returning payload (new profile data), along with the previous state
        // and the data in that state (which is what state.post should mean)
        //New data is the first in the array
        vehicles: [action.payload, ...state.vehicles]
      }
    case 'SET_VEHICLE':
      return {
        vehicle: action.payload
      }
    default:
      //Don't change anything, keep state as it was
      return state
  }
}

export const VehicleContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(vehicleReducer, {
    vehicles: null
  })

  //dispatch({type: 'getAllPosts', payload: [{}, {}, {}, ...]})


//Children = Root App Component (Assuming no change to index.js wrapping)
  return (
    <VehicleContext.Provider value={{...state, dispatch}}>
      { children } 
    </VehicleContext.Provider>
  )
}