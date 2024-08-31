import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const LayoutRoot = () => { 

    return <div>

            <Navbar/>

            <Outlet/>

            <p>Footer</p>

      </div>

 }
 
 export default LayoutRoot