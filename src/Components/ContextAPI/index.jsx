import React, { createContext, useContext } from "react";
import Navbar from "./components/Navbar";
import { useLogInOut } from "../SmallComponents/hooks/useLogInOut"; //! customHook

export const NavbarContext = createContext(); //! contextAPI

export const useAppContext = () => useContext(NavbarContext); //! contextAPI

function index({ project, currentProject }) {
    const [user, logout, submitFn] = useLogInOut(); //! custom hook
    return (
        //! contextAPI
        <NavbarContext.Provider value={{ user, logout, submitFn }}>
            <div
                className={`${
                    project === currentProject ? "block" : "hidden"
                } text-sm`}
            >
                <Navbar />
            </div>
        </NavbarContext.Provider>
        //! contextAPI
    );
}

export default index;
