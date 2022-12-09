import { createContext, useState } from "react";

export const TechContext = createContext({});


export const TechProvider = ({ children }) => {

    const [close, setClose] = useState(false)
    const [editing, setEditing] = useState(false)
    const [identificator, setIdentificator] = useState(null); 
    const [titling, setTitling] = useState(null)
    const [stt, setStt] = useState(null)
    const [reverse, setReverse] = useState(null)
    const [profile, setProfile] = useState(null);

  return (
    <TechContext.Provider value={{editing, setEditing, profile, setProfile, close, titling, setTitling, stt, setStt, setClose, identificator, setIdentificator, reverse, setReverse}}>
        {children}
    </TechContext.Provider>
  )
};
