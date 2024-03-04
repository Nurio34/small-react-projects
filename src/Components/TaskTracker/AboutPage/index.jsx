import { Link } from "react-router-dom";

function index() {
    return (
        <div className="bg-yellow-500 p-4 text-center min-h-52">
            <p>About Page</p>
            <Link to={"/"} className=" text-purple-600 underline font-bold">
                Go Back
            </Link>
        </div>
    );
}

export default index;
