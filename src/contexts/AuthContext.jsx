import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
     
    const token = localStorage.getItem('token')
    const [auth, setAuth] = useState()
     
   return (
     <AuthContext.Provider value={{ token, auth, setAuth}}>
        { children }
     </AuthContext.Provider>
   )
}