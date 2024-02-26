import FlipCoin from "./FlipCoin";
import FormDataAPI from "./FormDataAPI";
import GithubUsers from "./GithubUsers";
import Hobbies from "./Hobbies";
import People from "./People";
import PokemonAPI from "./PokemonAPI";
import SignLog from "./SignLog";
<<<<<<< HEAD
import UseRef from "./UseRef";
import CustomHook from "./CustomHook";
import ContextAPI from "./ContextAPI";
=======
import TicTacToe from "./TicTacToe/TicTacToe";
>>>>>>> b6cc1c30f190b3fb4dbda3d7e2aa1baf34f901d6

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
<<<<<<< HEAD
            <UseRef project={projects[6]} currentProject={currentProject} />
            <CustomHook project={projects[7]} currentProject={currentProject} />
            <ContextAPI project={projects[8]} currentProject={currentProject} />
=======
            <FlipCoin project={projects[6]} currentProject={currentProject} />
            <TicTacToe project={projects[7]} currentProject={currentProject} />
>>>>>>> b6cc1c30f190b3fb4dbda3d7e2aa1baf34f901d6
        </section>
    );
}

export default Section;
