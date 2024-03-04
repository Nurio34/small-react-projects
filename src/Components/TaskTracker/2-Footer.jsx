import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="p-4 bg-orange-300">
            <p>
                All Copyright &copy; deserved bt{" "}
                <a
                    href="https://github.com/nurio34"
                    className=" text-purple-600 underline font-bold"
                >
                    Nurio34
                </a>{" "}
                - 2024
            </p>
            <Link to="/about" className=" text-purple-600 underline font-bold">
                About
            </Link>
        </footer>
    );
}

export default Footer;
