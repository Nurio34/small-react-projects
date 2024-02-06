import { useEffect, useState } from "react"

function SignLog({project,currentProject}) {

    const [isLogin,setIsLogin] = useState(true)
    const [userSign, setUserSign] = useState({name:"",password:""})
    const [userLog, setUserLog] = useState({name:"",password:""})
    const [isSuccessLog, setIsSuccessLog] = useState(false)
    const [headerHeight, setHeaderHeight] = useState("")

    useEffect(()=> {
        window.addEventListener("load",()=>{
            const headerEl = document.getElementById("header")
            const headerHeight = headerEl.getBoundingClientRect().height
            setHeaderHeight(headerHeight)
        })
    },[])

  return (
    <div data-id={project}
        style={{display: project === currentProject ? "grid" : "none"}}
    >

        <header className="flex justify-end gap-4 p-4" id="header"> 
            <button className=" bg-blue-600 justify-self-center px-2 py-1 text-white font-semibold rounded-md cursor-pointer 
                hover:bg-blue-700 
                active:scale-95 "
                onClick={()=>setIsLogin(true)}
            >Login
            </button>
            <button className=" bg-blue-400 justify-self-center px-2 py-1 text-white font-semibold rounded-md cursor-pointer 
                hover:bg-blue-500 
                active:scale-95 "
                onClick={()=>setIsLogin(false)}
            >
            Signin
            </button>
        </header>

        <div className={`transition-all absolute top-[64px] w-full ${isSuccessLog ? "translate-x-full" : " translate-x-0"}`} >
            {isLogin ?

                <form className=" grid gap-2 bg-gray-300 p-4 m-4"
                    onSubmit={e=>{
                        e.preventDefault()
                        const dbUsers = JSON.parse(localStorage.getItem("users")) || []
                        const uniqueUserObj = dbUsers.find(userObj=>userObj.name === userLog.name)
                            if(uniqueUserObj.password === userLog.password) {
                                setIsSuccessLog(true)
                                console.log("login success");
                            }
                    }}
                >
                    <h1 className=" text-center font-bold text-lg">LOGIN FROM</h1>
                    <label htmlFor="nameInput" 
                        className=" grid grid-cols-[0.6fr,auto]"
                    >
                        Name 
                        <input type="text" name="Name" id="nameInput" value={userLog.name}
                            className=" border-[1px] border-black focus:outline-none px-2
                            "
                            onChange={e=>setUserLog(preState=>{
                                return {...preState,name:e.target.value}
                            })}
                            />
                    </label>
                    <label htmlFor="passInput" 
                        className=" grid grid-cols-[0.6fr,auto]"
                    >
                        Password
                        <input type="password" name="Pass" id="passInput" value={userLog.password}
                            className=" border-[1px] border-black focus:outline-none px-2"
                            onChange={e=>setUserLog(preState=>{
                                return {...preState,password:e.target.value}
                            })}
                            />
                    </label>
                    <input type="submit" value="Login"
                        className=" bg-green-500 justify-self-center px-2 py-1 text-white font-semibold rounded-md cursor-pointer 
                        hover:bg-green-700 
                        active:scale-95 "                
                    />
                </form> 
        
            : 

                <form className=" grid gap-2 bg-gray-300 p-4 m-4"
                    onSubmit={e=>{
                        e.preventDefault()
                        const dbUsers = JSON.parse(localStorage.getItem("users")) || []
                        
                        if(userSign.name && userSign.password) {
                            localStorage.setItem("users",JSON.stringify([...dbUsers,userSign]))
                            setIsLogin(true) 
                        }                
                    }}
                >
                    <h1 className=" text-center font-bold text-lg">SIGN FROM</h1>
                    <label htmlFor="nameInput" 
                        className=" grid grid-cols-[0.6fr,auto]"
                    >
                        Name 
                        <input type="text" name="Name" id="nameInput" value={userSign.name} 
                            className=" border-[1px] border-black focus:outline-none px-2
                            "
                            onChange={e=>setUserSign(preState=>{
                                return {...preState,name:e.target.value}
                            })}
                            />
                    </label>
                    <label htmlFor="passInput" 
                        className=" grid grid-cols-[0.6fr,auto]"
                    >
                        Password
                        <input type="password" name="Pass" id="passInput" value={userSign.password}
                            className=" border-[1px] border-black focus:outline-none px-2"
                            onChange={e=>setUserSign(preState=>{
                                return {...preState,password:e.target.value}
                            })}
                            />
                    </label>
                    <input type="submit" value="Signin"
                        className=" bg-green-500 justify-self-center px-2 py-1 text-white font-semibold rounded-md cursor-pointer 
                        hover:bg-green-700 
                        active:scale-95 "                
                    />
                </form>
            }
        </div>
        
        <div className={`transition duration-[2000ms] ease-in-out bg-gray-300 p-4 text-center ${isSuccessLog ? "opacity-100" : "opacity-0"} `}>
            Welcome {userLog.name}
        </div>
    </div>
  )
}

export default SignLog