import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
    const [projects, setProjects] = useState(["people", "hobbies","github-users"]);
    const [currentProject, setCurrentProject] = useState("github-users");
    const [count, setCount] = useState(0);

    const displayProject = (pro) => {
        setCurrentProject(pro);
        console.log(currentProject);
    };

    return (
        <div className="wrapper">
            <Header projects={projects} displayProject={displayProject} />
            <Main projects={projects} currentProject={currentProject} />
        </div>
    );
}

export default App;
