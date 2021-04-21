import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/forms/login.css'
import axios from 'axios';

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

        const newPost = {
            username: user.username,
            password: user.password
        }

        axios.post("http://www.localhost:9191/users/login", newPost)
            .then( response => {
                console.log(response)
                localStorage.setItem('username', user.username)
                props.setLoggedIn(true)
                setUser({
                    username: '',
                    password: ''
                })
                document.querySelector('span.error-handler').setAttribute('style', 'display: none')  
                props.history.push('/')
            })
            .catch(error => { 
                document.querySelector('span.error-handler').setAttribute('style', 'display: flex')
                document.querySelector('span.error-handler').textContent = "Incorrect Information"
                console.log('There was an error registering your content')})
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
                    <h1><i className="fas fa-record-vinyl logo"></i>Vinyl Navigator</h1>
                    <form className='login' onSubmit={submitHandler}>
                        <input name='username' 
                               type='text'
                               placeholder='username'
                               value={user.username}
                               onChange={changeHandler}
                               className='email'/>
                        <input name='password' 
                               type='password'
                               placeholder='password'
                               value={user.password}
                               className='email'
                               onChange={changeHandler}/>
                        <button className='btn'type='submit'>Submit</button>
                        <span className='error-handler' ></span>
                    </form>
                    <p style={{width: "100%", display: "flex", justifyContent: "center", color: "black", alignItems: "center"}}>Not a member? &nbsp; &nbsp; <Link to="register" > Register Here</Link></p>
                </div>    
            </div>
        </section>
    )
}

export default Login    





  