import Section from "./Section";

function Main({ projects, currentProject }) {
    return (
        <main>
            <Section projects={projects} currentProject={currentProject} />
        </main>
    );
}

export default Main;
