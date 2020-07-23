import React, {useState} from 'react'

const CreateUserForm = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordck, setPasswordck] = useState("")
    
    const handleClick = () => {
        try{
            if(password !== passwordck) return alert("check your password")
        }catch(e){
            alert("Cannot create user")
            setName("")
            setEmail("")
            setPassword("")
            setPasswordck("")
        }
    }
    return (
        <div className="form">
            <h1>CreateUser</h1>
            <input value={email} onChange={({target: {value}})=> setEmail(value)} type="text" placeholder="email"/>
            <input vlaue={name} onChange={({target: {value}})=>setName(value)} type="text" placeholder="name" />
            <input vlaue={password} onChange={({target: {value}})=>setPassword(value)} type="password" placeholder="password" />
            <input vlaue={passwordck} onChange={({target: {value}})=>setPasswordck(value)} type="password" placeholder="password check" />
            <button onClick={handleClick} className="btnLogin">SignUp</button>
        </div>
    )
}

export default CreateUserForm