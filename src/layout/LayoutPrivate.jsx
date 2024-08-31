import { Outlet, useNavigate,Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";


const LayoutPrivate = () => {

  const {user} =useUserContext();

  const navigate = useNavigate()

  /*useEffect(()=> {

          if(!user){
            navigate('/')
          }
  },[user])*/


    return <div>

            {
              user ? <Outlet/> : <Navigate to="/" />
            }

          </div>

}

export default LayoutPrivate;