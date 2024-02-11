import { createContext, useReducer, useEffect} from 'react'

export const PostContext = createContext()

//Typically check what action is in this function
//Action type and action data come from dispatch
export const postReducer = (state, action) => {
  switch (action.type){
    case 'SET_POSTS':
      return {
        posts: action.payload
      }
    case 'CREATE_POST':
      return {
        //returning payload (new profile data), along with the previous state
        // and the data in that state (which is what state.post should mean)
        //New data is the first in the array
        posts: [action.payload, ...state.posts]
      }
    case 'SET_POST':
      return {
        post: action.payload
      }
    default:
      //Don't change anything, keep state as it was
      return state
  }
}

export const PostContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(postReducer, {
    posts: null
  })

  //dispatch({type: 'getAllPosts', payload: [{}, {}, {}, ...]})


//Children = Root App Component (Assuming no change to index.js wrapping)
  return (
    <PostContext.Provider value={{...state, dispatch}}>
      { children } 
    </PostContext.Provider>
  )
}