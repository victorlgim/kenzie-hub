import { createContext, useState } from "react";

export const ModalContext = createContext({});


export const ModalProvider = ({ children }) => {

    const [close, setClose] = useState(false)
    const [deleted, setDeleted] = useState(false);

  return (
    <ModalContext.Provider value={{close, setClose, deleted, setDeleted}}>
        {children}
        </ModalContext.Provider>
  )
};
