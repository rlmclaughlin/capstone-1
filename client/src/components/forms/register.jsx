import React, {useState} from 'react'

function Register(){
    const [user, setUser] = useState({username: '', email: '', password: ''})

    const changeHandler = () => {

    }
    
    return(
        <form>
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
        </form>
    )
}

export default Register