import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleOpenEditModal = () => {
        setOpenEditModal(!openEditModal);
    }

    const handleOpenModal = () => {
      setOpenModal(!openModal);
    }

    return(
        <AppContext.Provider value={{
            openModal, 
            openEditModal,
            setOpenModal,
            handleOpenModal,
            handleOpenEditModal
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }