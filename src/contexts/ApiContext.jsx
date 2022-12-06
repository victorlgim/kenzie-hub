import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";
import { ModalContext } from "./ModalContext";

export const ApiContext = createContext({})

export const ApiProvider = ({ children }) => {

    const { close, deleted } = useContext(ModalContext)
    const { token } = useContext(AuthContext)
    const [ profile, setProfile ] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
          try {
            const response = await api.get("profile", { 
                headers: {
                Authorization: `Bearer ${token}`,
              },});
           setProfile(response.data);
          } catch (err) {}
        };
    
        getProfile();
      }, [close, deleted]);

  

       

      return (
        <ApiContext.Provider value={{ profile, setProfile  }}>
            {children}
        </ApiContext.Provider>
      )

    
  
}