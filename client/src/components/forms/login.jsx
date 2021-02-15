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
            document.querySelector('span.error-handler').setAttribute('style', 'display: none')
            props.history.push('/')
        } else{
            document.querySelector('span.error-handler').setAttribute('style', 'display: flex')
            document.querySelector('span.error-handler').textContent = "Incorrect Information"
        }
    }

    return(

        <section style={{maxWidth: '1300px'}} className='inventory-cards-container'>
        <section className='header header-background'>
            <hr style={{width: '10%', marginRight: "15px"}}/>
            <h1>Vinyl Navigator Members Portal</h1>
            <hr style={{width:"10%", marginLeft: '15px'}}/>
        </section>
        <div className='login-container'>
            <div className='box'>
                <h1><i class="fas fa-record-vinyl logo"></i>Vinyl Navigator</h1>
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
                    <span className='error-handler' ></span>
                </form>
            </div> 
                    

        </div>
        </section>

 
    )
}

export default Login    





  