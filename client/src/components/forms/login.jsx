import React, {useState} from 'react'

function Login(props){
    const [user, setUser] = useState({username: '', email: '', password: ''})
   
    const changeHandler = (e) => {
        e.preventDefault()
        setUser(items => ({
            ...items, 
                [e.target.name]: e.target.value
            }
        ))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.setUsers((items) => ([
            ...items, {
                id: props.users.length + 1,
                username: user.username,
                email: user.email,
                password: user.password,
                loggedIn: false
            }
        ]))
        console.log(localStorage.getItem('username'))

        if(localStorage.getItem('username') === user.username && localStorage.getItem('password') === user.password){
            console.log('cat')
        } 
    }
    
    return(
        <form onSubmit={submitHandler}>
            <input name='username' 
                   type='text'
                   placeholder='username'
                   value={user.username}
                   onChange={changeHandler}/>
            <input name='email' 
                   type='text'
                   placeholder='email'
                   value={user.email}
                   onChange={changeHandler}/>
            <input name='password' 
                   type='text'
                   placeholder='password'
                   value={user.password}
                   onChange={changeHandler}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login