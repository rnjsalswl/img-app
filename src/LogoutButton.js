import React from 'react'
import {withRouter} from 'react-router-dom'

const LogoutButton = ({logout, history}) =>{
    const handleClick = () =>{
        logout()
        alert("logout Successfully")
        history.push("/")
    }
    return <button onClick={handleClick}>Logout</button>
}

export default withRouter(LogoutButton)