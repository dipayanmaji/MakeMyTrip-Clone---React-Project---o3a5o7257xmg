import './Register.css';
import React, { useContext, useState } from 'react';
import { AiFillUnlock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { MyContext } from '../../components/Context/Context';

const Register = ()=>{
    const myContext = useContext(MyContext);
    const [uniqueUser, setUniqueUser] = useState(true);
    const [success, setSuccess] = useState(false);
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    })
    const inputHandler= (e)=>{
        setUniqueUser(true);
        setSuccess(false);
        const key = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [key]: value,
        })
    }
    const formSubmit= (e)=>{
        e.preventDefault();
        console.log(myContext.users);
        if(myContext.users[state.email] !== undefined){
            console.log(myContext.users[state.email]);
            setUniqueUser(false);
            return;
        }
        const user = {
            name: state.name,
            email: state.email,
            password: state.password,
        }
        console.log('add succesfull');
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
                <h1><AiFillUnlock/></h1>
                <h2>Register</h2>
                {success && <h2 style={{color: 'green'}}>Register Successful. Go to <Link to={'/login'}>Log In.</Link></h2>}
                {!uniqueUser && <h3 style={{color:'red'}}>! This Email is already taken. Try another.</h3>}
                <input name='name' id='name' type={'text'} onChange={inputHandler} value={state.name} placeholder='Name*' required />
                <input name='email' id='email' type={'email'} onChange={inputHandler} value={state.email} placeholder='Email*' required />
                <input name='password' id='password' type={'password'} onChange={inputHandler} value={state.password} placeholder='Password*' required />
                <button id='submit' type='submit'>Register</button>
                <Link to={'/login'}>Already Account? Log In</Link>
            </form>
        </div>
    )
}
export default Register;