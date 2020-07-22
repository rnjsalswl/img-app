const users=[
    {email:"test@test.com",password:"123", name:"test"},
    {email:"admin@test.com",password:"admin", name:"admin"}
]

export function signIn({email, password}){
    const user = users.find(
        (user) => user.email === email && user.password === password
    )
    if(user === undefined) throw new Error()
    return user
}