import FlipCoin from "./FlipCoin";
import FormDataAPI from "./FormDataAPI";
import GithubUsers from "./GithubUsers";
import Hobbies from "./Hobbies";
import People from "./People";
import PokemonAPI from "./PokemonAPI";
import SignLog from "./SignLog";
import UseRef from "./UseRef";
import CustomHook from "./CustomHook";
import ContextAPI from "./ContextAPI";
import TicTacToe from "./TicTacToe/TicTacToe";
import UseReducer from "./UseReducer";
import Performance from "./Performance";

function Section({ projects, currentProject }) {
    return (
        <section>
            {currentProject === projects[0] && <People />}
            {currentProject === projects[1] && <Hobbies />}
            {currentProject === projects[2] && <GithubUsers />}
            {currentProject === projects[3] && <SignLog />}
            {currentProject === projects[4] && <PokemonAPI />}
            {currentProject === projects[5] && <FormDataAPI />}
            {currentProject === projects[6] && <FlipCoin />}
            {currentProject === projects[7] && <TicTacToe />}
            {currentProject === projects[8] && <UseRef />}
            {currentProject === projects[9] && <CustomHook />}
            {currentProject === projects[10] && <ContextAPI />}
            {currentProject === projects[11] && <UseReducer />}
            {currentProject === projects[12] && <Performance />}
        </section>
    );
}

export default Section;
