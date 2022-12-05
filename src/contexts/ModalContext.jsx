import { createContext, useState } from "react";

export const ModalContext = createContext({});


export const ModalProvider = ({ children }) => {

    const [close, setClose] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [identificator, setIdentificator] = useState(null);
    const [reverse, setReverse] = useState(null)

  return (
    <ModalContext.Provider value={{close, setClose, deleted, setDeleted, identificator, setIdentificator, reverse, setReverse}}>
        {children}
        </ModalContext.Provider>
  )
};
