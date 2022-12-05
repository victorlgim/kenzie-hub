import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../services/api";
import { errModal, sucessModal } from "../services/toast";
import { GlobalContext } from "./GlobalContext";
import { ModalContext } from "./ModalContext";

export const ApiContext = createContext({})

export const ApiProvider = ({ children }) => {

    // GET PROFILE
    const { close, setClose, deleted } = useContext(ModalContext)
    const { setLoading } = useContext(GlobalContext)
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
          try {
            const token = JSON.parse(localStorage.getItem("token"));
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
          setLoading(true);
          const response = await api.post("users/techs", data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          sucessModal();
    
          setTimeout(() => {
            setLoading(false);
          }, 1800);
    
          setTimeout(() => {
            setClose(false);
          }, 2100);
        } catch (err) {
          setTimeout(() => {
            setClose(true);
            setLoading(false);
            errModal();
            reset();
          }, 1800);
        }
      };

      return (
        <ApiContext.Provider value={{ profile, setProfile }}>
            {children}
        </ApiContext.Provider>
      )


}