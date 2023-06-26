import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  
    const auth = ()=>{
        const user = localStorage.getItem('User')
        if (user) return true
        else return false
    }

    if(auth()){
        return <Outlet/>
    }

    else{
        return <Navigate to='login'/>
    }


}

export default PrivateRoute