import React from "react";

export default function SubmitBtn() {
    return (
        <input
            type="submit"
            value="Submit"
            className="bg-green-400  py-1 rounded-md text-white font-medium cursor-pointer transition 
                    hover:bg-green-600 
                    active:scale-95"
        />
    );
}
