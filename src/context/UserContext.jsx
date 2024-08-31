//Configuracion context

//importacion
import { createContext, useContext, useState } from "react";

//inicializacion del context
export const UserContext = createContext();
//Provider
const UserProvider  = ({children}) => {

    const [user,setUser] = useState(true)

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

//minihook                        //hook    //provider
export const useUserContext = ()=> useContext(UserContext)