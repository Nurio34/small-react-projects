import { useEffect, useState } from "react"

function GithubUsers({project, currentProject}) {

    const [users,setUsers] = useState([])
    const [followers,setFollowers] = useState([])

    useEffect(()=> {

        const fetchGithubUsers = async () => {
            const response = await fetch("https://api.github.com/users")
            const users = await response.json()
            setUsers(users)
            console.log(users);
        }

        fetchGithubUsers()
    },[])


  return (
    <div data-id={project}
    style={{
        display: project === currentProject ? "grid" : "none",
    }}>
    <h1 className="p-2 text-center uppercase font-semibold">Github Users</h1>
    <ul className="grid gap-2 justify-center">
        {users.map(user=>{
            const {id,login,avatar_url,html_url,} = user
            return <li key={id} className="flex gap-4 px-2">
                <img src={avatar_url} alt={login} className=" w-16 rounded-full" />
                <div className="grid">
                    <p className=" capitalize">{login}</p>
                    <a href={html_url} className=" text-purple-600 underline" >Profile</a>
                </div>
            </li>
        })}
    </ul>
    </div>
  )
  
}

export default GithubUsers