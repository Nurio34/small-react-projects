import React from "react";

function Person({ personObj, removePerson }) {
    console.log("render");
    return (
        <div className="text-center capitalize border-b-[1px] border-black p-2 ">
            <p>{personObj.name}</p>
            <button
                data-id={personObj.id}
                className=" border-[1px] border-black p-1 rounded-md transition-all
                hover:bg-red-400 
                active:scale-90 
                "
                onClick={(e) => removePerson(e.target.dataset.id)}
            >
                Remove
            </button>
        </div>
    );
}

export default Person;
