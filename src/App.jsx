import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
    const [projects, setProjects] = useState([
        "people",
        "hobbies",
        "github-users",
        "sign/log",
        "pokemonAPI",
        "formDataAPI",
    ]);

    const [currentProject, setCurrentProject] = useState("formDataAPI");

    const displayProject = (pro) => {
        setCurrentProject(pro);
    };

    return (
        <div className="wrapper">
            <Header projects={projects} displayProject={displayProject} />
            <Main projects={projects} currentProject={currentProject} />
        </div>
    );
}

export default App;
