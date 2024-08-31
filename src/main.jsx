import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {router} from './router/index.jsx'
import {RouterProvider} from "react-router-dom"

import UserProvider from "./context/UserContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
         <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>
)
