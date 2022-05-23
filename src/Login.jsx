import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import amazon__logo from './images/amazon__logo.png'
import { auth  } from './firebase.js';
import "./login.css";
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  function signin(e){
    e.preventDefault()
  }
  function register(e){
    e.preventDefault()

    auth 
     .createUserWithEmailAndPassword(email,password)
     .then((auth)=>{
       console.log(auth);
     })
     .catch(error => alert (error.message))
  }
  return (
    <div className='login'>
      <Link to={"/"}>
            
        <img 
        className='login__logo' 
        src={amazon__logo} 
        alt="#" 
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form >
          <h5>E-mail</h5>
          <input type="text" value={email}
          onChange={e=>setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input type="password" value={password}
          onChange={e=>setPassword(e.target.value)}
          />
          <button type='submit' onClick={signin} className="login__signInButton">
            Sign-in
          </button>
        </form>
        <p>
        This article will show you a number of examples of 
        how these "I Agree To" checkboxes can be designed 
        and utilized on websites, mobile apps and desktop apps.
        </p>
        <button 
        type='submit' onClick={register} 
        className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login