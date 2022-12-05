import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
     
    const [loading, setLoading] = useState(false)
    const [spinner, setSpinner] = useState(false)
     
   return (
     <GlobalContext.Provider value={{ loading, setLoading, spinner, setSpinner }}>
        { children }
     </GlobalContext.Provider>
   )
}