import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
    const [projects, setProjects] = useState(["counter", "people", "color"]);
    const [currentProject, setCurrentProject] = useState("people");
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
