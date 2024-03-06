import { useEffect, useState } from "react";
import Header from "./1-Header";
import Main from "./HomePage";
import Footer from "./2-Footer";
import About from "./AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function index() {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const res = await fetch("http://localhost:3000/tasks");
        const data = await res.json();
        setTasks(data);
    };

    useEffect(() => {
        getTasks();
    }, []);

    const addTask = async (task) => {
        const res = await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(task),
        });
        const data = await res.json();
        setTasks([...tasks, data]);
    };

    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const updateTask = async (id) => {
        const task = tasks.filter((task) => task.id === id)[0];
        const res = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                reminder: task.reminder === "on" ? "off" : "on",
            }),
        });
        const data = await res.json();
        setTasks(tasks.map((item) => (item.id === id ? data : item)));
    };

    return (
        <div>
            <Router>
                <Header />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main
                                tasks={tasks}
                                addTask={addTask}
                                deleteTask={deleteTask}
                                updateTask={updateTask}
                            />
                        }
                    />

                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default index;
