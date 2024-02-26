import { useState } from "react";

export const useLogInOut = () => {
    const [user, setuser] = useState(null);

    const logout = () => {
        setuser(null);
    };

    const submitFn = (e) => {
        e.preventDefault();
        const data = [...new FormData(e.currentTarget)];
        console.log(data);
        const name = Object.values(Object.fromEntries(data))[0];
        setuser(name);
    };

    return [user, logout, submitFn];
};
