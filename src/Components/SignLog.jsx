import { useEffect, useState } from "react";

function SignLog({ project, currentProject }) {
    const [isLogin, setIsLogin] = useState(true);
    const [userSign, setUserSign] = useState({ name: "", password: "" });
    const [userLog, setUserLog] = useState({ name: "", password: "" });
    const [isSuccessLog, setIsSuccessLog] = useState(false);
    const [formTop, setFormTop] = useState(null);

    useEffect(() => {
        window.addEventListener("load", () => {
            const signLogHeaderEl = document.getElementById("signLog_header");
            const signLogHeaderHeight = Math.ceil(
                signLogHeaderEl.getBoundingClientRect().height,
            );
            const signLogheaderMargin = Math.ceil(
                parseInt(
                    window
                        .getComputedStyle(signLogHeaderEl)
                        .marginBlock.split("px"),
                ),
            );
            const signLogTotalHeight =
                signLogHeaderHeight + signLogheaderMargin;

            const headerEl = document.getElementById("header");
            const headerHeight = Math.ceil(
                headerEl.getBoundingClientRect().height,
            );

            setFormTop(signLogTotalHeight + headerHeight);

            const func = () => {
                return "ıdjp";
            };
        });
    });

    return (
        <div
            data-id={project}
            style={{ display: project === currentProject ? "grid" : "none" }}
        >
            <header
                className="flex justify-end gap-4 p-4 bg-gray-300 m-4"
                id="signLog_header"
            >
                <button
                    className=" bg-blue-600 justify-self-center px-2 py-1 text-white font-semibold rounded-md cursor-pointer 
                hover:bg-blue-700 
                active:scale-95 "
                    onClick={() => {
                        setIsLogin(true);
                    }}
                >
                    Login
                </button>
                <button
                    className=" bg-blue-400 justify-self-center px-2 py-1 text-white font-semibold rounded-md cursor-pointer 
                hover:bg-blue-500 
                active:scale-95 "
                    onClick={() => {
                        setIsLogin(false);
                        if (isSuccessLog) setIsSuccessLog(!isSuccessLog);
                    }}
                >
                    Signin
                </button>
            </header>

            <div
                className={`transition-all duration-1000 absolute  w-full ${
                    isSuccessLog
                        ? "translate-x-full hidden"
                        : " translate-x-0 visible"
                }`}
                style={{ top: `${formTop}px` }}
            >
                {isLogin ? (
                    <form
                        className=" grid gap-2 bg-gray-300 p-4 m-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const dbUsers =
                                JSON.parse(localStorage.getItem("users")) || [];
                            const uniqueUserObj = dbUsers.find(
                                (userObj) => userObj.name === userLog.name,
                            );
                            if (uniqueUserObj.password === userLog.password) {
                                setIsSuccessLog(true);
                                console.log("login success");
                            }
                        }}
                    >
                        <h1 className=" text-center font-bold text-lg">
                            LOGIN FROM
                        </h1>
                        <label
                            htmlFor="logNameInput"
                            className=" grid grid-cols-[0.6fr,auto]"
                        >
                            Name
                            <input
                                type="text"
                                name="Name"
                                id="logNameInput"
                                value={userLog.name}
                                autoFocus
                                className=" border-[1px] border-black focus:outline-none px-2
                            "
                                onChange={(e) =>
                                    setUserLog((preState) => {
                                        return {
                                            ...preState,
                                            name: e.target.value,
                                        };
                                    })
                                }
                            />
                        </label>
                        <label
                            htmlFor="logPassInput"
                            className=" grid grid-cols-[0.6fr,auto]"
                        >
                            Password
                            <input
                                type="password"
                                name="Pass"
                                id="logPassInput"
                                value={userLog.password}
                                className=" border-[1px] border-black focus:outline-none px-2"
                                onChange={(e) =>
                                    setUserLog((preState) => {
                                        return {
                                            ...preState,
                                            password: e.target.value,
                                        };
                                    })
                                }
                            />
                        </label>
                        <input
                            type="submit"
                            value="Login"
                            className=" bg-green-500 justify-self-center px-2 py-1 text-white font-semibold rounded-md cursor-pointer 
                        hover:bg-green-700 
                        active:scale-95 "
                        />
                    </form>
                ) : (
                    <form
                        className=" grid gap-2 bg-gray-300 p-4 m-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const dbUsers =
                                JSON.parse(localStorage.getItem("users")) || [];

                            if (userSign.name && userSign.password) {
                                localStorage.setItem(
                                    "users",
                                    JSON.stringify([...dbUsers, userSign]),
                                );
                                setIsLogin(true);
                            }
                        }}
                    >
                        <h1 className=" text-center font-bold text-lg">
                            SIGN FROM
                        </h1>
                        <label
                            htmlFor="signNameInput"
                            className=" grid grid-cols-[0.6fr,auto]"
                        >
                            Name
                            <input
                                type="text"
                                name="Name"
                                id="signNameInput"
                                value={userSign.name}
                                className=" border-[1px] border-black focus:outline-none px-2
                            "
                                onChange={(e) =>
                                    setUserSign((preState) => {
                                        return {
                                            ...preState,
                                            name: e.target.value,
                                        };
                                    })
                                }
                            />
                        </label>
                        <label
                            htmlFor="signPassInput"
                            className=" grid grid-cols-[0.6fr,auto]"
                        >
                            Password
                            <input
                                type="password"
                                name="Pass"
                                id="signPassInput"
                                value={userSign.password}
                                className=" border-[1px] border-black focus:outline-none px-2"
                                onChange={(e) =>
                                    setUserSign((preState) => {
                                        return {
                                            ...preState,
                                            password: e.target.value,
                                        };
                                    })
                                }
                            />
                        </label>
                        <input
                            type="submit"
                            value="Signin"
                            className=" bg-green-500 justify-self-center px-2 py-1 text-white font-semibold rounded-md cursor-pointer 
                        hover:bg-green-700 
                        active:scale-95 "
                        />
                    </form>
                )}
            </div>

            <div
                className={`transition duration-1000 ease-in-out  bg-gray-300 p-4 text-center mx-4
                            grid 
                ${isSuccessLog ? "opacity-100 visible" : "opacity-0 hidden"} `}
            >
                <button
                    className="bg-blue-600 justify-self-end px-2 py-1 text-white font-semibold rounded-md cursor-pointer 
                hover:bg-blue-700 
                active:scale-95 "
                    onClick={(e) => {
                        setIsSuccessLog(!isSuccessLog);
                    }}
                >
                    Logout
                </button>
                Welcome {userLog.name}
            </div>
        </div>
    );
}

export default SignLog;
