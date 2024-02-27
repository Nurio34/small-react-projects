import { createContext, useContext } from "react";
import { useUser } from "./Components/SmallComponents/hooks/useUser";

const GlobalAppContext = createContext();

export const useGlobalAppContext = () => useContext(GlobalAppContext);

function GlobalContext({ children }) {
    const { user, displayUser } = useUser();

    return (
        <GlobalAppContext.Provider value={{ user, displayUser }}>
            {children}
        </GlobalAppContext.Provider>
    );
}

export default GlobalContext;
