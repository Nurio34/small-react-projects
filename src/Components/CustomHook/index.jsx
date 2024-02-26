import SubmitBtn from "../SmallComponents/SubmitBtn";
import { useToggle } from "./useToggle";
import { useFetchUser } from "./useFetchUser";

function index({ project, currentProject }) {
    const [toggle, toggleFn] = useToggle(false);

    const url = "https://api.github.com/users/nurio34";
    const [isLoading, isError, user] = useFetchUser(url);

    return (
        <div
            className={`${
                project === currentProject ? "grid" : "hidden"
            } justify-center gap-4 p-4`}
        >
            <div className=" bg-gray-200 p-4 text-center">
                <h1>Toggle Custom Hook</h1>
                <SubmitBtn value={"Toggle"} fn={toggleFn} />
                {toggle && <p>Stuff</p>}
            </div>

            {isLoading && <p>Loading...</p>}

            {isError && <p>Error...</p>}

            {!isLoading && !isError && user && (
                <div className=" bg-gray-100 grid justify-items-center p-4">
                    <img
                        src={user.avatar_url}
                        alt=""
                        width={100}
                        className=" rounded-full"
                    />
                    {user.name && <p>{user.name}</p>}
                    {user.location && <div>from {user.location}</div>}
                </div>
            )}
        </div>
    );
}

export default index;
