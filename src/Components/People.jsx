import { useState } from "react";
import { data, people } from "../datas/people";
import Person from "./Person";

function People({ project, currentProject }) {
    const [dataPeople, setDataPeople] = useState(data);

    const removePerson = (id) => {
        const updatedDataPeople = dataPeople.filter(
            (person) => person.id != id,
        );
        console.log(updatedDataPeople);
        setDataPeople(updatedDataPeople);
    };

    const clearAll = () => {
        const updatedDataPeople = [];
        setDataPeople(updatedDataPeople);
    };

    return (
        <div
            data-id={project}
            className="place-items-center p-4"
            style={{
                display: project === currentProject ? "grid" : "none",
            }}
        >
            {dataPeople.map((personObj) => {
                return (
                    <Person
                        key={personObj.id}
                        personObj={personObj}
                        removePerson={removePerson}
                    />
                );
            })}
            <button
                className=" border-[1px] border-black p-1 rounded-md transition-all m-2 justify-self-stretch
                 hover:bg-blue-600 
                active:scale-90 
                "
                onClick={clearAll}
            >
                Clear All
            </button>
        </div>
    );
}

export default People;
