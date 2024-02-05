function Color({ project, currentProject }) {
    return (
        <div
            data-id={project}
            style={{
                display: project === currentProject ? "block" : "none",
            }}
        >
            Color
        </div>
    );
}

export default Color;
