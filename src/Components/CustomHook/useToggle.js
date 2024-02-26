import { useState } from "react";

export const useToggle = (defaultValue) => {
    const [toggle, setToogle] = useState(defaultValue);

    const toggleFn = () => {
        setToogle((preSt) => !preSt);
    };

    return [toggle, toggleFn];
};
