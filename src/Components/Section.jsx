import GithubUsers from "./GithubUsers";
import Hobbies from "./Hobbies";
import People from "./People";
import SignLog from "./SignLog";

function Section({ projects, currentProject }) {
    return (
        <section>
            <People project={projects[0]} currentProject={currentProject} />
            <Hobbies project={projects[1]} currentProject={currentProject} />
            <GithubUsers project={projects[2]} currentProject={currentProject} />
            <SignLog  project={projects[3]} currentProject={currentProject} />
        </section>
    );
}

export default Section;
