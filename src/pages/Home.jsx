import {useUserContext} from "../context/UserContext"
import {useNavigate} from "react-router-dom";

const Home = () => {

    const {user,setUser} =useUserContext()

    const navigate = useNavigate()

    const handleLogin = () => { 

        setUser({
            name: 'admin',
            email: 'admin@correo.com'
        })
        navigate('/dashboard')
        

     }
    return  (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Home;