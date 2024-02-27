import People from "../People";
import Counter from "./components/Counter";

function index() {
    return (
        <section className={`grid justify-center`}>
            <Counter />
            <People />
        </section>
    );
}

export default index;
