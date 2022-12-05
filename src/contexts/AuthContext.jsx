import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
     
    const token = JSON.parse(localStorage.getItem('token'))
    const [auth, setAuth] = useState()
     
   return (
     <AuthContext.Provider value={{ token, auth, setAuth}}>
        { children }
     </AuthContext.Provider>
   )
}