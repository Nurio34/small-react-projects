import { useState } from "react";
import { data } from "../datas/people";
import Person from "./Person";
import SubmitBtn from "./SmallComponents/SubmitBtn";

function People({ project, currentProject }) {
    const [dataPeople, setDataPeople] = useState(data);

    const removePerson = (id) => {
        const updatedDataPeople = dataPeople.filter(
            (person) => person.id != id,
        );
        setDataPeople(updatedDataPeople);
    };

    const clearAll = () => {
        const updatedDataPeople = [];
        setDataPeople(updatedDataPeople);
    };

    const resetList = () => {
        setDataPeople(data);
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
            {dataPeople.length > 0 ? (
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

export default People;
