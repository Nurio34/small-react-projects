import React, { useState } from "react";
import SubmitBtn from "../SmallComponents/SubmitBtn";
import People from "../People";

function index() {
    const [count, setcount] = useState(0);

    const increase = () => setcount((prest) => prest + 1);

    return (
        <section className={`grid justify-center`}>
            <SubmitBtn value={`Increase ${count}`} fn={increase} />
            <People />
        </section>
    );
}

export default index;
