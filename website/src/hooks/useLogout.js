import { useAuthContext } from "./useAuthContext"

//no request for backend necessary
//remove user info from local storage, change context(global state)
export const useLogout = () => {
   
   const { dispatch } = useAuthContext()
    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: "LOGOUT"})


    }

    return {logout}
}