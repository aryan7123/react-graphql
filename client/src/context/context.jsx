import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
      setOpenModal(!openModal);
    }
    
    return(
        <AppContext.Provider value={{

        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }