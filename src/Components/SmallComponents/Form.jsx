import React from "react";
import SubmitBtn from "./SubmitBtn";

function Form({ isMember, adjustForm, submitForm, isAnyBlank, successLogin }) {
    return (
        <>
            <form
                action=""
                className=" grid gap-3 p-4 bg-gray-300 relative overflow-hidden max-w-[500px] justify-self-center"
                onSubmit={submitForm}
            >
                <p
                    className={`absolute right-0 transition-all ${
                        !isAnyBlank ? "translate-x-[101%]" : "translate-x-0"
                    } bg-red-500 text-white p-1`}
                >
                    Please Provide All Info!
                </p>

                <h1 className=" font-bold text-xl text-center">
                    {!isMember ? "Login" : "Signin"}
                </h1>

                {isMember && (
                    <label
                        htmlFor="nameInp"
                        className="grid grid-cols-[auto,1fr]"
                    >
                        <p className="min-w-20">Name</p>
                        <input
                            type="text"
                            name="name"
                            id="nameInp"
                            className=" border-[1px] border-black px-1 w-full"
                        />
                    </label>
                )}

                <label htmlFor="mailInp" className="grid grid-cols-[auto,1fr]">
                    <p className="min-w-20">Email</p>
                    <input
                        type="email"
                        name="email"
                        id="mailInp"
                        className=" border-[1px] border-black px-1 w-full"
                    />
                </label>
                <label htmlFor="passInp" className="grid grid-cols-[auto,1fr]">
                    <p className="min-w-20">Password</p>
                    <input
                        type="password"
                        name="password"
                        id="passInp"
                        className=" border-[1px] border-black px-1 w-full"
                    />
                </label>
                <SubmitBtn />
                <div className=" justify-self-center">
                    {!isMember && (
                        <div className=" flex gap-2">
                            <p>Not a member yet ?</p>
                            <button
                                className=" text-purple-500 underline"
                                onClick={adjustForm}
                            >
                                Signin
                            </button>
                        </div>
                    )}
                    {isMember && (
                        <div className=" flex gap-2">
                            <p>Already a member ?</p>
                            <button
                                className=" text-purple-500 underline cursor-pointer"
                                onClick={adjustForm}
                            >
                                Login
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </>
    );
}

export default Form;
