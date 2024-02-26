import { useContext } from "react";
import { NavbarContext } from "..";
import SubmitBtn from "../../SmallComponents/SubmitBtn";

function UserContainer() {
    const { user, logout, submitFn } = useContext(NavbarContext); //! contextAPI

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome {user}</p>
                    <SubmitBtn value={"Logout"} fn={logout} />
                </>
            ) : (
                <>
                    <form onSubmit={submitFn}>
                        <input
                            type="text"
                            name="Name"
                            id="nameInp"
                            className=" border-black border-[1px] w-20 "
                        />
                    </form>
                </>
            )}
        </div>
    );
}

export default UserContainer;
