import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import './LoginForm.css'

const LoginForm = ({ authenticated, login, location }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () => {
        try {
            login({ email, password })
        } catch (e) {
            alert("Failed to login")
            setEmail("")
            setPassword("")
        }
    }
    const { from } = location.state || { from: { pathname: "/" } }
    if (authenticated) {return <Redirect to={from} />}

    return (
        <div className="form">
            <h1>Login</h1>
            <input value={email} onChange={({ target: { value } }) => setEmail(value)} type="text" placeholder="email" />

            <input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" placeholder="password" />

            <button onClick={handleClick} className="btnLogin">Login</button>
        </div>
    )
}

export default LoginForm