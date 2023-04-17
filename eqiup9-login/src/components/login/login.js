import react from 'react'
import './login.css'
import React, { useState } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'



const Login =({setLoginUser})=>{

    
    const [ user, setUser] = useState({
        email:"",
        password:"",
    })

    

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const login =()=>{
        axios.post('http://localhost:9002/login',user)
        .then(res=>{
            alert(res.data.message)
            setLoginUser(res.data.user)
            // history.push("/")
        })
        
        
    }

return(
    <div className="login">
      {  console.log('userr',user)}
    <h1>Login</h1>
    <input type="text" name="email" value={user.email}  placeholder="Enter your Email" onChange={handleChange}></input>
    <input type="password" name="password" value={user.password}   placeholder="Enter your Password" onChange={handleChange} ></input>
    <div className="button" onClick={login} >Login</div>
    <div>or</div>
    <Link to="/register" >
    <div  >Register</div>
    </Link>
</div>
)
}

export default Login