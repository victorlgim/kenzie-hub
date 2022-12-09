import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
     
    const [loading, setLoading] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [spin, setSpin] = useState(false)
     
   return (
     <GlobalContext.Provider value={{ loading, setLoading, spinner, setSpinner, spin, setSpin }}>
        { children }
     </GlobalContext.Provider>
   )
}