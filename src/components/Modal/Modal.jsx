import './Modal.css';
import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

const Modal=({type})=>{
    const myContext = useContext(MyContext);
    const navigate = useNavigate();
    const portalClose= ()=>{
        myContext.displayPortal(false);
        navigate('/');
    }
    const logIn=()=>{
        myContext.displayPortal(false);
        navigate('/login');
    }
    return(
        <div onClick={portalClose} className='modal-container'>
            <div className='modal' onClick={(e)=> e.stopPropagation()}>
                    {type === 'logIn' &&
                    <><nav className='logIn-modal'>Hii <span>{myContext.currUser.name.split(' ')[0]}</span>,</nav>
                    <nav className='logIn-modal'>Welcome to MakeMyTrip</nav></>}

                    {type === 'logOut' && <div className='logOut-modal'>You are successfully log out.</div>}

                    {type === 'checkout' && <section className='checkout-modal'>Congratulation! You booking successfully done.</section>}

                    {
                        type === 'notLogedIn'  &&
                        <section className='notLogedIn-modal'>You are not Logged In yet.
                            <button id='login-btn' onClick={logIn}>Log In</button>
                        </section>
                    }
                <button onClick={portalClose}>GO To Home</button>
            </div>
        </div>
    )
}
export default Modal;