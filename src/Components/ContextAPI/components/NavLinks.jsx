import React from "react";
import UserContainer from "./UserContainer";

function NavLinks() {
    return (
        <div className="flex m-auto gap-4">
            <ul className="flex gap-4">
                <li>
                    <a href="#" className=" underline text-purple-600">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className=" underline text-purple-600">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className=" underline text-purple-600">
                        Contact
                    </a>
                </li>
            </ul>
            <UserContainer />
        </div>
    );
}

export default NavLinks;
