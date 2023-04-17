import React from "react"
import "./homepage.css"

const Homepage = () => {

    const logout=()=>{
     window.location.replace('http://localhost:3000/login')
    }
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={logout} >Logout</div>
        </div>
    )
}

export default Homepage