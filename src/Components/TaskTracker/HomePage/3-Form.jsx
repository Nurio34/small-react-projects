import { useState } from "react";

function Form({ addTask }) {
    const [open, setOpen] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const Form = new FormData(e.target);
        const task = Object.fromEntries(Form);
        addTask(task);
        e.target.reset();
    };
    return (
        <section className=" grid gap-4 bg-pink-300">
            <div className=" shadow-lg flex justify-between p-4">
                <h1 className=" font-bold text-lg">Task Tracker</h1>
                <button
                    className={`${
                        open ? "bg-red-500" : "bg-green-300"
                    } py-1 px-2 rounded-md`}
                    onClick={() => setOpen(!open)}
                >
                    {open ? "Close" : "Add"}
                </button>
            </div>
            {open && (
                <form className="grid gap-4 p-4" onSubmit={handleSubmit}>
                    <label
                        className="grid grid-cols-[0.2fr,1fr] gap-4"
                        htmlFor="taskInp"
                    >
                        Task
                        <input
                            className=" py-1 px-2 border border-black"
                            type="text"
                            name="task"
                            id="taskInp"
                        />
                    </label>
                    <label
                        className="grid grid-cols-[0.2fr,1fr] gap-4"
                        htmlFor="dateInp"
                    >
                        Date
                        <input
                            className=" py-1 px-2 border border-black"
                            type="date"
                            name="date"
                            id="dateInp"
                        />
                    </label>
                    <label
                        className="grid grid-cols-[0.2fr,1fr] gap-4 items-center"
                        htmlFor="reminderInp"
                    >
                        Reminder
                        <input
                            className=" py-1 px-2 border border-black justify-self-start"
                            type="checkbox"
                            name="reminder"
                            id="reminderInp"
                        />
                    </label>
                    <input
                        type="submit"
                        value="Add Task"
                        className={` bg-green-300 py-1 px-2 rounded-md`}
                    />
                </form>
            )}
        </section>
    );
}

export default Form;
