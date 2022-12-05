import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../services/api";
import { errModal, sucessModal } from "../services/toast";
import { AuthContext } from "./AuthContext";
import { GlobalContext } from "./GlobalContext";
import { ModalContext } from "./ModalContext";


export const ApiContext = createContext({})

export const ApiProvider = ({ children }) => {

    // GET PROFILE
    const { close, setClose, deleted } = useContext(ModalContext)
    const { setSpinner } = useContext(GlobalContext)
    const { token } = useContext(AuthContext)
    const [profile, setProfile] = useState(null);

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

    //   ADD NEW TECHNOLOGIES
      const onSubmitAtt = async data => {
        try {
          setSpinner(true);
          const response = await api.post("users/techs", data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          sucessModal();
    
          setTimeout(() => {
            setSpinner(false);
          }, 1800);
    
          setTimeout(() => {
            setClose(false);
          }, 2100);
          return response
        } catch (err) {
          setTimeout(() => {
            setClose(true);
            setSpinner(false);
            errModal();
          }, 1800);
        }
       
      };

      return (
        <ApiContext.Provider value={{ profile, setProfile, onSubmitAtt }}>
            {children}
        </ApiContext.Provider>
      )


}