import './Register.css';
import React, { useContext, useEffect, useState } from 'react';
import { GiArchiveRegister } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { MyContext } from '../../components/Context/Context';

const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const validName = /^[a-zA-Z]+ [a-zA-Z]+$/;

const Register = ()=>{
    const myContext = useContext(MyContext);
    useEffect(()=>{
        myContext.onHomePage(false);
    },[])

    const [uniqueUser, setUniqueUser] = useState(true);
    const [success, setSuccess] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    })
    const inputHandler= (e)=>{
        setUniqueUser(true);
        setSuccess(false);
        setInvalidPassword(false);
        setInvalidName(false);
        const key = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [key]: value,
        })
    }
    const formSubmit= (e)=>{
        e.preventDefault();
        if(myContext.users[state.email] !== undefined){
            setUniqueUser(false);
            return;
        }
        if(!validName.test(state.name)){
            setInvalidName(true);
            return;
        }
        if(!validPassword.test(state.password)){
            setInvalidPassword(true);
            return;
        }
        const user = {
            name: state.name,
            email: state.email,
            password: state.password,
        }
        myContext.addUsers(user);
        setState({
            name: '',
            email: '',
            password: '',
        })
        setSuccess(true);
    }
    return(
        <div className='register-container'>
            <form className='register' onSubmit={formSubmit}>
                <h1><GiArchiveRegister/></h1>
                <h2>Register</h2>
                {success && <h2 style={{color: 'green'}}>Register Successful. Go to <Link to={'/login'}>Log In.</Link></h2>}
                {!uniqueUser && <h3 style={{color:'red'}}>! This Email is already taken. Try another.</h3>}
                
                <input name='name' id='name' type={'text'} onChange={inputHandler} value={state.name} placeholder='Full Name*' required />
                {invalidName && <span style={{color:'red'}}>Please enter your full name (first & last name), ex. Jhon Doe</span>}
                
                <input name='email' id='email' type={'email'} onChange={inputHandler} value={state.email} placeholder='Email*' required />
                
                <input name='password' id='password' type={'password'} onChange={inputHandler} value={state.password} placeholder='Password*' required />
                {invalidPassword && <span style={{color:'red'}}>Password must be contain minimum 8 letter, with at least a symbol, upper and lower case letters and a number</span>}
                
                <button id='submit' type='submit'>Register</button>
                <Link to={'/login'}>Already Account? Log In</Link>
            </form>
        </div>
    )
}
export default Register;