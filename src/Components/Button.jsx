function Button({ project, displayProject }) {
    return (
        <button
            className=" border-[1px] border-black p-1 rounded-md transition-all
            hover:bg-orange-400 
            active:scale-90 
            "
            data-id={project}
            onClick={(e) => {
                displayProject(e.target.dataset.id);
            }}
        >
            {project}
        </button>
    );
}

export default Button;
