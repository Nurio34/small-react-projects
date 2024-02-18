import FlipCoin from "./FlipCoin";
import FormDataAPI from "./FormDataAPI";
import GithubUsers from "./GithubUsers";
import Hobbies from "./Hobbies";
import People from "./People";
import PokemonAPI from "./PokemonAPI";
import SignLog from "./SignLog";
import TicTacToe from "./TicTacToe/TicTacToe";

function Section({ projects, currentProject }) {
    return (
        <section>
            <People project={projects[0]} currentProject={currentProject} />
            <Hobbies project={projects[1]} currentProject={currentProject} />
            <GithubUsers
                project={projects[2]}
                currentProject={currentProject}
            />
            <SignLog project={projects[3]} currentProject={currentProject} />
            <PokemonAPI project={projects[4]} currentProject={currentProject} />
            <FormDataAPI
                project={projects[5]}
                currentProject={currentProject}
            />
            <FlipCoin project={projects[6]} currentProject={currentProject} />
            <TicTacToe project={projects[7]} currentProject={currentProject} />
        </section>
    );
}

export default Section;
