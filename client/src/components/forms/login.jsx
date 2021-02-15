import React, {useState} from 'react'
import '../../styles/forms/login.css'

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
        let isReal = false
        e.preventDefault()

        props.users.map(item => (
            item.username === user.username && item.email === user.email && item.password === user.password ? isReal = true : isReal  
        ))

        if(isReal === true){
            localStorage.setItem('username', user.username)
            localStorage.setItem('email', user.email)
            props.setLoggedIn(true)
            props.history.push('/')
        } else{
            console.log("WRONG")
        }
    }

    return(

        <section style={{maxWidth: '1300px'}} className='inventory-cards-container'>
        <section className='header header-background'>
            <hr style={{width: '10%', marginRight: "15px"}}/>
            <h1>Lollipop Shoppe Vinyl</h1>
            <hr style={{width:"10%", marginLeft: '15px'}}/>
        </section>
        <div className='login-container'>
            <div className='box'>
                <h1>Sign In</h1>
                <form className='login' onSubmit={submitHandler}>
                    <input name='username' 
                           type='text'
                           placeholder='username'
                           value={user.username}
                           onChange={changeHandler}
                           className='email'/>
                    <input name='email' 
                           type='text'
                           placeholder='email'
                           value={user.email}
                           className='email'
                           onChange={changeHandler}/>
                    <input name='password' 
                           type='password'
                           placeholder='password'
                           value={user.password}
                           className='email'
                           onChange={changeHandler}/>
                    <button className='btn'type='submit'>Submit</button>
                </form>
            </div> 
                    

        </div>
        </section>

 
    )
}

export default Login    





  