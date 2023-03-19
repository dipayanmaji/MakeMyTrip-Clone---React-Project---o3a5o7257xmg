import './Register.css';
import React from 'react';
import { AiFillUnlock } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Register = ()=>{
    return(
        <form className='register'>
            <h1><AiFillUnlock/></h1>
            <h2>Register</h2>
            <input id='name' type={'text'} placeholder='Name*' required autoComplete='off' />
            <input id='email' type={'email'} placeholder='Email*' required autoComplete='off' />
            <input id='password' type={'password'} placeholder='Password*' required autoComplete='off' />
            <button id='submit' type='submit'>Register</button>
            <Link to={'/login'}>Already Account? Log In</Link>
        </form>
    )
}
export default Register;