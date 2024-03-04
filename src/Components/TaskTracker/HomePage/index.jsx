import Form from "./3-Form";
import Tasks from "./4-Tasks";

function Main({ tasks, addTask, deleteTask, updateTask }) {
    return (
        <main>
            <Form addTask={addTask} />
            <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                updateTask={updateTask}
            />
        </main>
    );
}

export default Main;
