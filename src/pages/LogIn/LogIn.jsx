import './LogIn.css';
import React, { useContext, useEffect, useState } from 'react';
import { AiFillLock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { MyContext } from '../../components/Context/Context';
import { createPortal } from 'react-dom';
import Modal from '../../components/Modal/Modal';

const LogIn= ()=>{
    const myContext = useContext(MyContext);
    useEffect(()=>{
        myContext.onHomePage(false);
    },[])

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
        myContext.loggedInSetter(true);
        myContext.displayPortal(true);
    }
    return(
        <div className='login-container'>
            <form className='login-form' onSubmit={formSubmit}>
                <h1><AiFillLock/></h1>
                {!validUser && <h3 style={{color:'red'}}>Couldn't find your account. <Link to={'/register'}>Register here</Link>.</h3>}
                {wroungPassword && <h3 style={{color:'red'}}>Wroung Password!</h3>}
                <h2>Log IN</h2>
                <input id='email' type={'email'} name='email' onChange={inputHandler} placeholder='Email*' required />
                <input id='password' type={'password'} name='password' onChange={inputHandler} placeholder='Password*' required />
                <button id='submit' type='submit'>Log In</button>
                <Link to={'/register'}>New User? Sign Up</Link>
            </form>
            {myContext.portalView && createPortal(<Modal type={'logIn'} />,document.getElementById('portal'))}
        </div>
    )
}
export default LogIn;