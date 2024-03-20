import React, { useEffect, useRef, useState } from "react";
import SubmitBtn from "./SmallComponents/SubmitBtn";

function UseRef({ project, currentProject }) {
    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const isMounted = useRef(false);
    console.log("ok");
    const nameInput = useRef(null);

    const submitFn = (e) => {
        e.preventDefault();
        console.log({ name });
    };

    const increaseFn = () => {
        setValue((preSt) => preSt + 1);
    };

    useEffect(() => {
        nameInput.current.focus();
    });

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        console.log({ isMounted: isMounted.current });
    }, [value]);

    const [renderCount, setRenderCount] = useState(null);
    const [showCount, setShowCount] = useState(false);

    const count = useRef(0);

    const increaseCount = () => {
        count.current++;
    };

    const showCountFn = () => {
        setRenderCount(count.current);
        setShowCount(!showCount);
    };

    return (
        <>
            <div
                className={`${
                    project === currentProject ? "grid" : "hidden"
                } p-4 justify-center gap-4`}
            >
                <form
                    className="grid gap-4 bg-gray-300 p-4 min-w-[75vw]"
                    onSubmit={submitFn}
                >
                    <label
                        htmlFor="nameInput"
                        className="grid text-center uppercase font-bold leading-8"
                    >
                        Name
                        <input
                            type="text"
                            name="Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            id="nameInput"
                            className=" border-[1px] border-black px-1 font-normal"
                            ref={nameInput}
                        />
                    </label>
                    <SubmitBtn value={"Submit"} />
                </form>

                <div className=" bg-blue-200 grid justify-center gap-4 p-4">
                    <p className="text-center">VALUE : {value}</p>
                    <SubmitBtn value={"Increase"} fn={increaseFn} />
                </div>
            </div>
            <div>
                <h2>Guess the Click Count</h2>
                <button
                    className="py-1 px-2 bg-yellow-200"
                    onClick={increaseCount}
                >
                    Click
                </button>
                <button
                    className="py-1 px-2 bg-yellow-200"
                    onClick={showCountFn}
                >
                    Show
                </button>
            </div>
            {showCount && <p>{count.current}</p>}
        </>
    );
}

export default UseRef;
