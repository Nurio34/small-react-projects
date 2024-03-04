import React from "react";
import Task from "./5-Task";

function Tasks({ tasks, deleteTask, updateTask }) {
    return (
        <section className=" relative">
            {!tasks.length ? (
                <p>No Tasks to show</p>
            ) : (
                <ul className=" grid gap-4 p-4">
                    {tasks.map((task) => {
                        return (
                            <Task
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                updateTask={updateTask}
                            />
                        );
                    })}
                </ul>
            )}
        </section>
    );
}

export default Tasks;
