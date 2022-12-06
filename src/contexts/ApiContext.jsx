import { createContext, useState } from "react";

export const ApiContext = createContext({})

export const ApiProvider = ({ children }) => {

    
    const [ profile, setProfile ] = useState(null);

    

      return (
        <ApiContext.Provider value={{ profile, setProfile  }}>
            { children }
        </ApiContext.Provider>
      )

    
  
}