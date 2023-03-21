import './Checkout.css';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../components/Context/Context';
import { getDate } from '../../components/Search Content/getDate';
import Modal from '../../components/Modal/Modal';
import { createPortal } from 'react-dom';

const numbers = [0,1,2,3,4,5,6,7,8,9];
let validNameChar = /^[a-zA-Z ]$/;

const Checkout=()=> {
    const myContext = useContext(MyContext);
    const [name, setName] = useState('');
    const [state, setState] = useState({
        cardNumber: '',
        cvv: '',
    })
    
    useEffect(()=>{
        myContext.onHomePage(false);
    },[])

    const nameHandler= (e)=>{
        const value = e.target.value;
        if(value == ''){
            setName(value);
            return;
        }
        const lastValue = value.charAt(value.length-1);
        if(!validNameChar.test(lastValue)) return;
        setName(value);
    }

    const numInputHandler=(e)=>{
        const key = e.target.name;
        let value = e.target.value;
        if(value == ''){
            setState({
                ...state,
               [key]: value,
            })
        }
        const lastValue = (value.charAt(value.length-1));
        if(numbers.includes(parseInt(lastValue)) === false) return;
        setState({
            ...state,
           [key]: value,
        })
    }
    const date = getDate(new Date());

    const formSubmit= (e)=>{
        e.preventDefault();
        myContext.displayPortal(true);
    }

    const baseFare = parseInt(myContext.price);
    const fee = parseInt((myContext.price*18)/100);//18% GST
    const total = baseFare + fee;
    return(
        <div className='checkout-containers'>
            <div className='checkout'>
                <section className='fare-summary'>
                    <h1>Fare Summary</h1>
                    <div className='summary'>
                        <div className='base-fare'>
                            <span>Base Fare</span>
                            <span>₹ {baseFare}</span>
                        </div>
                        <div className='fee-surcharges'>
                            <span>Fee & Surcharges</span>
                            <span>₹ {fee}</span>
                        </div>
                        <div className='total-amount'>
                            <span>Total Amount</span>
                            <span>₹ {total}</span>
                        </div>
                    </div>
                </section>
                <section className='payment'>
                    <h1>Payment Method</h1>
                    <form onSubmit={formSubmit} className='payment-method'>
                        <div>
                            <label htmlFor='name'>Name*</label> <br />
                            <input id='name' type="text" onChange={nameHandler} value={name} minLength={3} maxLength={30} placeholder='Name On Card' required />
                        </div>
                        <div>
                            <label htmlFor='card-number'>Card Number*</label> <br />
                            <input id='card-number' name='cardNumber' onChange={numInputHandler} value={state.cardNumber} type="text" minLength={16} maxLength={16} placeholder='Card Number' required />                            
                        </div>
                        <div>
                            <label htmlFor='expiry-date'>Expiry Date*</label> <br />
                            <input id='expiry-date' type="month" min={`${date.yyyy}-${date.mm}`} placeholder='Expiry Date' required />
                        </div>
                        <div>
                            <label htmlFor='cvv'>CVV*</label> <br />
                            <input id='cvv' name='cvv' onChange={numInputHandler} value={state.cvv} type="text" minLength={3} maxLength={3} placeholder='CVV' required />
                        </div>
                        <div>
                            <button id='pay'>Pay</button>
                        </div>
                    </form>
                </section>
            </div>
            {myContext.portalView && createPortal(<Modal type={'checkout'} />,document.getElementById('portal'))}
        </div>
    )
}
export default Checkout;