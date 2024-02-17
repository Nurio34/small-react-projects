import { useEffect, useState } from "react";
import Form from "./SmallComponents/Form";

function FormDataAPI({ project, currentProject }) {
    const [isMember, setIsMember] = useState(false);
    const [isAnyBlank, setIsAnyBlank] = useState(false);
    const [successLogin, setSuccessLogin] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isAnyBlank) setIsAnyBlank(!isAnyBlank);
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, [isAnyBlank]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (successLogin) setSuccessLogin(!successLogin);
    //     }, 3000);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [successLogin]);

    const adjustForm = (e) => {
        e.preventDefault();
        setIsMember(!isMember);
    };

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const values = Object.values(data);
        const isAnyBlankInput = values.includes("");

        if (isAnyBlankInput) {
            setIsAnyBlank(!isAnyBlank);
            console.log("Please provide all info");
            return;
        }

        setSuccessLogin(!successLogin);
        e.currentTarget.reset();
    };

    return (
        <div
            className="p-4 grid relative overflow-hidden"
            style={{
                display: project === currentProject ? "grid" : "none",
            }}
        >
            <Form
                isMember={isMember}
                adjustForm={adjustForm}
                submitForm={submitForm}
                isAnyBlank={isAnyBlank}
                successLogin={successLogin}
            />
        </div>
    );
}

export default FormDataAPI;
