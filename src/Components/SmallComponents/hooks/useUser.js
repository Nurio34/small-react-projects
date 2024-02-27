import { useState } from "react";

export const useUser = () => {
    const [user, setname] = useState("Nurio");

    const displayUser = () => {
        console.log(user);
    };

    return { user, displayUser };
};
