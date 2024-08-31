//importar Navlink
import {NavLink } from "react-router-dom"
//la configuracion del context lo creamos
import {useUserContext} from "../context/UserContext"

const Navbar = () => { 

    console.log(useUserContext)

    const {user,setUser} = useUserContext()

    return(
        <nav>

            <NavLink to="/">Home</NavLink>
            { 
                user && ( <div><NavLink to="/dashboard">Dashboard</NavLink> <button onClick={() => setUser(false)}>Logout</button></div>
              )
            }
        
        </nav>
    )

 }

 export default Navbar;