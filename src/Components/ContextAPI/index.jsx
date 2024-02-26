import React from "react";
import Navbar from "./components/Navbar";

function index({ project, currentProject }) {
    return (
        <div className={`${project === currentProject ? "block" : "hidden"}`}>
            <p>Parent</p>
            <Navbar />
        </div>
    );
}

export default index;
