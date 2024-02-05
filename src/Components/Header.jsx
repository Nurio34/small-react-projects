import Button from "./Button";

function Header({ projects, displayProject }) {
    return (
        <header className="header flex justify-center p-2 border-[1px] border-b-gray-300 gap-4  ">
            {projects.map((project, index) => {
                return (
                    <Button
                        key={index + 1}
                        project={project}
                        displayProject={displayProject}
                    />
                );
            })}
        </header>
    );
}

export default Header;
