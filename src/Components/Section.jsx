import Color from "./Color";
import Counter from "./Counter";
import People from "./People";

function Section({ projects, currentProject }) {
    return (
        <section>
            <Counter project={projects[0]} currentProject={currentProject} />
            <People project={projects[1]} currentProject={currentProject} />
            <Color project={projects[2]} currentProject={currentProject} />
        </section>
    );
}

export default Section;
