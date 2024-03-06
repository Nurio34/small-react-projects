import React, { useEffect, useMemo, useState } from "react";

function Debounce() {
    const [param, setParam] = useState(null);
    const [user, setUser] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await fetch("https://dummyjson.com/users");
            const { users } = await res.json();
            setUser(
                users.filter((user) => {
                    return (
                        user.firstName
                            .toLowerCase()
                            .indexOf(param.toLowerCase()) == 0
                    );
                }),
            );
        } catch (error) {}
    };

    useEffect(() => {
        if (param) {
            let timeId;
            timeId = setTimeout(() => {
                fetchUsers();
            }, 1000);
            return () => {
                clearTimeout(timeId);
            };
        }
    }, [param]);

    return (
        <>
            <div className="p-4">
                <input
                    type="search"
                    name=""
                    id=""
                    className=" border border-black w-full"
                    onChange={(e) => setParam(e.target.value)}
                />
            </div>
            {user.length > 0 && (
                <div>
                    {user.map((item, ind) => {
                        return <li key={ind}>{item.firstName}</li>;
                    })}
                </div>
            )}
        </>
    );
}

export default Debounce;
