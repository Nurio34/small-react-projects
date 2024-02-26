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
<<<<<<< HEAD
        "useRef",
        "customHook",
        "contextAPI",
    ]);

    const [currentProject, setCurrentProject] = useState("contextAPI");
=======
        "flipCoin",
        "ticTacToe"
    ]);

    const [currentProject, setCurrentProject] = useState("pokemonAPI");
>>>>>>> b6cc1c30f190b3fb4dbda3d7e2aa1baf34f901d6

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
