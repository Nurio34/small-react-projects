import React, { useState } from "react";

function Task({ task, deleteTask, updateTask }) {
    const [modal, setModal] = useState(false);

    return (
        <li
            className={`flex justify-between items-start shadow-lg p-4 border-blue-500 ${
                task.reminder === "on" ? "border-l-4" : ""
            }`}
            onDoubleClick={() => updateTask(task.id)}
        >
            <div>
                <p>{task.task}</p>
                <p>{task.date}</p>
            </div>
            <button
                className="text-white bg-red-500 w-6 aspect-square rounded-full"
                onClick={() => setModal(true)}
            >
                x
            </button>
            {modal && (
                <div className=" bg-gray-200 p-4 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p>Are you sure ?</p>
                    <div className="flex justify-evenly gap-4">
                        <button
                            className=" bg-red-500 rounded-md py-1 px-2"
                            onClick={() => setModal(false)}
                        >
                            No
                        </button>
                        <button
                            className=" bg-green-500 rounded-md py-1 px-2"
                            onClick={() => deleteTask(task.id)}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            )}
        </li>
    );
}

export default Task;
