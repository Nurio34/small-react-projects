import SubmitBtn from "../../SmallComponents/SubmitBtn";
import { useAppContext } from ".."; //! contextAPI

function UserContainer() {
    const { user, logout, submitFn } = useAppContext(); //! contextAPI
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
