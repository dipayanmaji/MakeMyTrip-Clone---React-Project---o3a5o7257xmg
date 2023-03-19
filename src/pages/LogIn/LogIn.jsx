import './LogIn.css';
import React from 'react';
import { AiFillLock } from "react-icons/ai";
import { Link } from 'react-router-dom';

const LogIn= ()=>{
    return(
        <form className='login-form'>
            <h1><AiFillLock/></h1>
            <h2>Log IN</h2>
            <input id='email' type={'email'} placeholder='Email*' required autoComplete='off' />
            <input id='password' type={'password'} placeholder='Password*' required autoComplete='off' />
            <button id='submit' type='submit'>Log In</button>
            <Link to={'/register'}>New User? Sign Up</Link>
        </form>
    )
}
export default LogIn;