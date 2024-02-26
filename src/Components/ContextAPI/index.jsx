import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import { useLogInOut } from "../Hooks/useLogInOut";

export const NavbarContext = createContext(); //! contextAPI

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
    );
}

export default index;
