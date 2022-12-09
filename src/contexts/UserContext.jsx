import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
 

    const { setLoading, setSpinner } = useContext(GlobalContext);

    const exitAccount = () => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
    
          navigate("/"); 
          setLoading(false);
          setSpinner(false)
      };

     
   return (
     <UserContext.Provider value={{ exitAccount}}>
        { children }
     </UserContext.Provider>
   )
}