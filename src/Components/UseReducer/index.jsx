import { useReducer, useState } from "react";
import { data } from "../../datas/people";
import Person from "../Person";
import SubmitBtn from "../SmallComponents/SubmitBtn";

const defaultState = {
    people: data,
    count: 0,
    showCount: true,
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "Remove":
            return {
                ...state,
                people: state.people.filter(
                    (person) => person.id != action.payload.id,
                ),
            };
        case "ClearAll":
            return {
                ...state,
                people: [],
            };
        case "Reset":
            return {
                ...state,
                people: data,
            };

        case "Increase":
            return { ...state, count: state.count + 1 };
        case "Decrease":
            return { ...state, count: state.count - 1 };
        case "ResetCount":
            return { ...state, count: 0 };
        case "Show":
            return { ...state, showCount: !state.showCount };

        default:
            return state;
    }
};

function index() {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const removePerson = (id) => {
        dispatch({ type: "Remove", payload: { id } });
    };

    const clearAll = () => {
        dispatch({ type: "ClearAll" });
    };

    const reset = () => {
        dispatch({ type: "Reset" });
    };

    const increase = () => {
        dispatch({ type: "Increase" });
    };

    const decrease = () => {
        dispatch({ type: "Decrease" });
    };

    const resetCount = () => {
        dispatch({ type: "ResetCount" });
    };

    const show = () => {
        dispatch({ type: "Show" });
    };

    return (
        <>
            <div className=" grid gap-2 p-4">
                <ul className=" grid gap-2 ">
                    {state.people.map((person, index) => {
                        return (
                            <li
                                key={person.id}
                                className=" m-4 border-b border-gray-400 text-center p-2"
                            >
                                <p
                                    className=" capitalize"
                                    style={{ fontVariant: "small-caps" }}
                                >
                                    {person.name}
                                </p>
                                <button
                                    className=" py-1 px-4 bg-red-400"
                                    onClick={(e) => removePerson(person.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {state.people.length > 0 && (
                    <button
                        className=" py-1 px-4 bg-red-600"
                        onClick={clearAll}
                    >
                        Clear All
                    </button>
                )}
                {!state.people.length && (
                    <button className=" py-1 px-4 bg-green-600" onClick={reset}>
                        Reset
                    </button>
                )}
            </div>

            <div className="space-x-4 text-center">
                {state.showCount && <div>Count is :{state.count}</div>}
                <div className="space-x-4 ">
                    <button
                        className="py-1 px-2 bg-yellow-300"
                        onClick={increase}
                    >
                        Increase
                    </button>
                    <button
                        className="py-1 px-2 bg-yellow-300"
                        onClick={decrease}
                    >
                        Decrease
                    </button>
                    <button
                        className="py-1 px-2 bg-yellow-300"
                        onClick={resetCount}
                    >
                        Reset
                    </button>
                    <button className="py-1 px-2 bg-yellow-300" onClick={show}>
                        Show
                    </button>
                </div>
            </div>
        </>
    );
}

export default index;
