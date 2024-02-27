import React, { useState } from "react";
import SubmitBtn from "../../SmallComponents/SubmitBtn";

function Counter() {
    const [count, setcount] = useState(0);
    const increase = () => setcount((prest) => prest + 1);

    return <SubmitBtn value={`Increase ${count}`} fn={increase} />;
}

export default Counter;
