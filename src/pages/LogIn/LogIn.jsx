import './LogIn.css';
import React, { useContext, useState } from 'react';
import { AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../components/Context/Context';

const LogIn= ()=>{
    const navigate = useNavigate();
    const myContext = useContext(MyContext);
    console.log(myContext.users);
    const [validUser, setValidUser] = useState(true);
    const [wroungPassword, setWroungPassword] = useState(false);
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const inputHandler= (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [key]: value,
        });
        setValidUser(true);
        setWroungPassword(false);
    }
    const formSubmit= (e)=>{
        e.preventDefault();
        if(myContext.users[state.email] === undefined){
            setValidUser(false);
            return;
        }
        if(myContext.users[state.email].password != state.password){
            setWroungPassword(true);
            return;
        }
        const user = {
            name: myContext.users[state.email].name,
            email: state.email,
            password: state.password,            
        }
        myContext.addCurrUser(user);
        myContext.loggedInSet(true);
        navigate('/');
    }
    return(
        <div className='login-container'>
            <form className='login-form' onSubmit={formSubmit}>
                <h1><AiFillLock/></h1>
                {!validUser && <span style={{color:'red'}}>Couldn't find your account. <Link to={'/register'}>Register here</Link>.</span>}
                {wroungPassword && <span style={{color:'red'}}>Wroung Password!</span>}
                <h2>Log IN</h2>
                <input id='email' type={'email'} name='email' onChange={inputHandler} placeholder='Email*' required />
                <input id='password' type={'password'} name='password' onChange={inputHandler} placeholder='Password*' required />
                <button id='submit' type='submit'>Log In</button>
                <Link to={'/register'}>New User? Sign Up</Link>
            </form>
        </div>
    )
}
export default LogIn;