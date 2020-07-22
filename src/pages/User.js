import React from 'react'

const User = ({user}) =>{
    const {email, password, name} = user || {}
    return(
        <div>
            <h1>User</h1>
            <dt>Email</dt>
            <dd>{email}</dd>
            <dt>Password</dt>
            <dd>{password}</dd>
            <dt>Name</dt>
            <dd>{name}</dd>
        </div>
    )
}

export default User