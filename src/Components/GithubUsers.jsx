import { useEffect, useState } from "react";

function GithubUsers({ project, currentProject }) {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    console.log(false && 2);
    useEffect(() => {
        const fetchGithubUsers = async () => {
            try {
                const response = await fetch("https://api.github.com/users");
                const users = await response.json();
                if (!response.ok) {
                    setTimeout(() => {
                        setIsError(true);
                    }, 3000);
                    return;
                }

                setTimeout(() => {
                    setUsers(users);
                }, 3000);
            } catch (error) {
                setTimeout(() => {
                    setIsError(true);
                }, 3000);
            } finally {
                setTimeout(() => {
                    window.addEventListener(
                        "DOMContentLoaded",
                        setIsLoading(false),
                    );
                }, 3000);
            }
        };

        fetchGithubUsers();
    }, []);

    return (
        <>
            <div
                data-id={project}
                style={{
                    display: project === currentProject ? "grid" : "none",
                }}
            >
                <h1 className="p-2 text-center uppercase font-semibold">
                    Github Users
                </h1>
                <ul className="grid gap-2 justify-center">
                    {users.map((user) => {
                        const { id, login, avatar_url, html_url } = user;
                        return (
                            <li key={id} className="flex gap-4 px-2">
                                <img
                                    src={avatar_url}
                                    alt={login}
                                    className=" w-16 rounded-full"
                                />
                                <div className="grid">
                                    <p className=" capitalize">{login}</p>
                                    <a
                                        href={html_url}
                                        className=" text-purple-600 underline"
                                    >
                                        Profile
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div
                style={{
                    display: isLoading ? "grid" : "none",
                }}
                className=" absolute w-full h-full bg-black text-white place-items-center text-2xl font-extrabold"
            >
                Loading...
            </div>
            <div
                style={{
                    display: isError ? "grid" : "none",
                }}
                className=" absolute w-full h-full bg-black text-white place-items-center text-2xl font-extrabold"
            >
                An Error Occured. <br />
                Refresh the Page...
            </div>
        </>
    );
}

export default GithubUsers;
