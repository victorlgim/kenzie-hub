import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token'));
    const { setLoading } = useContext(GlobalContext);
    const [auth, setAuth] = useState(false);

    const exitAccount = () => {
        setLoading(true);
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setAuth(false);
          navigate("/"); 
          setLoading(false);
        }, 1500);
      };

    useEffect(() => !auth && navigate("/login"), auth);
     
   return (
     <AuthContext.Provider value={{ token, auth, setAuth, exitAccount}}>
        { children }
     </AuthContext.Provider>
   )
}