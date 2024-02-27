import { useReducer, useState } from "react";
import { data } from "../../datas/people";
import Person from "../Person";
import SubmitBtn from "../SmallComponents/SubmitBtn";

const defaultState = {
    people: data,
};

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
        case CLEAR_LIST:
            return { ...state, people: [] };

        case RESET_LIST:
            return { ...state, people: data };

        case REMOVE_ITEM:
            return {
                ...state,
                people: state.people.filter(
                    (person) => person.id != action.payload.id,
                ),
            };
        default:
            throw Error(`No matching ${action.type}`);
    }
};

function index({ project, currentProject }) {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const removePerson = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: { id } });
    };

    const clearAll = () => {
        dispatch({ type: CLEAR_LIST });
    };

    const resetList = () => {
        dispatch({ type: RESET_LIST });
    };

    return (
        <div
            data-id={project}
            className="place-items-center p-4"
            style={{
                display: project === currentProject ? "grid" : "none",
            }}
        >
            {state.people.map((personObj) => {
                return (
                    <Person
                        key={personObj.id}
                        personObj={personObj}
                        removePerson={removePerson}
                    />
                );
            })}
            {state.people.length > 0 ? (
                <button
                    className=" border-[1px] border-black p-1 rounded-md transition-all m-2 justify-self-stretch
                 hover:bg-blue-600 
                active:scale-90 
                "
                    onClick={clearAll}
                >
                    Clear All
                </button>
            ) : (
                <SubmitBtn value={"Reset"} fn={resetList} />
            )}
        </div>
    );
}

export default index;
