import { useEffect, useState } from "react";

export const useFetchUser = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        //
        const fetchFn = async (url) => {
            try {
                const res = await fetch(url);

                if (res.ok !== true) {
                    setIsError(true);
                }

                const data = await res.json();
                setUser(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        };

        fetchFn(url);
    }, []);

    return [isLoading, isError, user];
};
