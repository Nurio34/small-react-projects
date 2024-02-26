import React from "react";

export default function SubmitBtn({ value, fn }) {
    return (
        <input
            type="submit"
            value={value}
            className="bg-green-400  py-1 rounded-md text-white font-medium cursor-pointer transition py-2 px-4
                    hover:bg-green-600 
                    active:scale-95"
            onClick={fn}
        />
    );
}
