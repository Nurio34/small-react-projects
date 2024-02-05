function Counter({ project, currentProject }) {
    return (
        <div
            data-id={project}
            style={{
                display: project === currentProject ? "block" : "none",
            }}
        >
            Counter
        </div>
    );
}

export default Counter;
