import React, { useState } from "react";
import './SearchContent.css';
import { getDate } from "./getDate";

const months = [' Jan',' Feb',' Mar',' Apr',' May',' Jun',' Jul',' Aug',' Sep',' Oct',' Nov',' Dec'];
const numbers = [0,1,2,3,4,5,6,7,8,9];

const today = getDate(new Date());

const SearchContent= ({type})=>{
    if(type === 'flights'){
        const [checked, setChecked] = useState('one');
        const [state, setState] = useState({
            formValue: 'Delhi',
            toValue: 'Mumbai',
        })
        const [getDeparture, setDeparture] = useState({
            min: today.date,
            value: today.date,
            date: Number(today.dd),
            month: months[Number(today.mm)-1],
            year: `${today.yyyy}`.slice(2,4),
            day: today.day,
        });
        const [getReturn, setReturn] = useState({
            value: today.date,
            min: today.date,
            date: Number(today.dd),
            month: months[Number(today.mm)-1],
            year: `${today.yyyy}`.slice(2,4),
            day: today.day,
        });
        const departureChange= (e)=>{
            let date = new Date(e.target.value);
            const currentDate = getDate(date);
            setDeparture({
                ...getDeparture,
                value: currentDate.date,
                date: Number(currentDate.dd),
                month: months[Number(currentDate.mm)-1],
                year: `${currentDate.yyyy}`.slice(2,4),
                day: currentDate.day,
            });
    
            const dayAfter = getDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
            setReturn({
                min: currentDate.date,
                value: dayAfter.date,
                date: Number(dayAfter.dd),
                month: months[Number(dayAfter.mm)-1],
                year: `${dayAfter.yyyy}`.slice(2,4),
                day: dayAfter.day,
            })
        }
        const returnChange= (e)=>{
            let date = new Date(e.target.value);
            const currentDate = getDate(date);
            setReturn({
                ...getReturn,
                value: currentDate.date,
                date: Number(currentDate.dd),
                month: months[Number(currentDate.mm)-1],
                year: `${currentDate.yyyy}`.slice(2,4),
                day: currentDate.day,
            });
        }
        return (
            <div className="search-content-container">
                <div className="search-content">
                    <form onSubmit={(e)=> e.preventDefault()} className="search-content-form">
                        <div className="trip-type">
                            <div className={`one-way-container ${checked === 'one' && 'checked'}`}>
                                <input autoComplete="off" id="one-way" type={'radio'} name='trip-type' onChange={()=> setChecked('one')} checked={checked==='one'} />
                                <label htmlFor="one-way">One Way</label>
                            </div>
                            <div className={`round-trip-container ${checked === 'round' && 'checked'}`}>
                                <input autoComplete="off" id="round-trip" type={'radio'} name='trip-type' onChange={()=> setChecked('round')} checked={checked==='round'} />
                                <label htmlFor="round-trip">Round Trip</label>
                            </div>
                            <div className={`multi-city-container ${checked === 'multi' && 'checked'}`}>
                                <input autoComplete="off" id="multi-city" type={'radio'} name='trip-type' onChange={()=> setChecked('multi')} checked={checked==='multi'} />
                                <label htmlFor="multi-city">Multi City</label>
                            </div>
                        </div>
                        <div className="trip-details">
                            <div className="trip-details-input">
                                <label htmlFor="from">From</label>
                                <input autoComplete="off" id="from" type="text" placeholder="From" onChange={(e)=>setState({...state, formValue: e.target.value})} value={state.formValue} />
                            </div>
                            <div className="trip-details-input">
                                <label htmlFor="to">To</label>
                                <input autoComplete="off" id="to" type="text" placeholder="To" onChange={(e)=>setState({...state, toValue: e.target.value})} value={state.toValue} />
                            </div>
    
                            <div className="trip-details-input">
                                <label htmlFor="departure">Departure</label>
                                <nav className="departure-display">
                                    <p><span>{getDeparture.date}</span>
                                    {getDeparture.month}'{getDeparture.year}
                                    <br/>{getDeparture.day}</p>
                                    <input autoComplete="off" id="departure" type="date" min={getDeparture.min} value={getDeparture.value} onChange={departureChange} />
                                </nav>
                            </div>
    
                            <div className="trip-details-input">
                                <label htmlFor="return">Return</label>
                                <nav className="return-display">
                                    <p><span>{getReturn.date}</span>
                                    {getReturn.month}'{getReturn.year}
                                    <br/>{getReturn.day}</p>
                                    <input autoComplete="off" id="return" type="date" min={getReturn.min} value={getReturn.value} onChange={returnChange} />
                                </nav>
                            </div>
                        </div>
                        <button type="submit" id="search-btn">Search</button>
                    </form>
                </div>
            </div>
        )
    }
    else if(type === 'hotels'){
        const [checked, setChecked] = useState('single');
        const [city, setCity] = useState('Goa');
        const [guests, setGuests] = useState(2);
        const [checkIn, setCheckIn] = useState({
            min: today.date,
            value: today.date,
            date: Number(today.dd),
            month: months[Number(today.mm)-1],
            year: `${today.yyyy}`.slice(2,4),
            day: today.day,
        });
        const [checkOut, setCheckOut] = useState({
            value: today.date,
            min: today.date,
            date: Number(today.dd),
            month: months[Number(today.mm)-1],
            year: `${today.yyyy}`.slice(2,4),
            day: today.day,
        });
        const checkInChange= (e)=>{
            let date = new Date(e.target.value);
            const currentDate = getDate(date);
            setCheckIn({
                ...checkIn,
                value: currentDate.date,
                date: Number(currentDate.dd),
                month: months[Number(currentDate.mm)-1],
                year: `${currentDate.yyyy}`.slice(2,4),
                day: currentDate.day,
            });
    
            const dayAfter = getDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
            setCheckOut({
                min: currentDate.date,
                value: dayAfter.date,
                date: Number(dayAfter.dd),
                month: months[Number(dayAfter.mm)-1],
                year: `${dayAfter.yyyy}`.slice(2,4),
                day: dayAfter.day,
            })
        }
        const checkOutChange= (e)=>{
            let date = new Date(e.target.value);
            const currentDate = getDate(date);
            setCheckOut({
                ...checkOut,
                value: currentDate.date,
                date: Number(currentDate.dd),
                month: months[Number(currentDate.mm)-1],
                year: `${currentDate.yyyy}`.slice(2,4),
                day: currentDate.day,
            });
        }
        const guestsHandler= (e)=>{
            const value = e.target.value;
            if(value == '' || value == 0){
                setGuests('');
                setChecked('single')
                return;
            }
            const lastValue = parseInt(value.charAt(value.length-1));
            if(numbers.includes(lastValue) === false) return;
            setGuests(value);
            if(value < 3) setChecked('single');
            else if(value >= 3 && value<=5) setChecked('double');
            else setChecked('king');
        }
        return (
            <div className="search-content-container">
                <div className="search-content">
                    <form onSubmit={(e)=> e.preventDefault()} className="search-content-form">
                        <div className="room-type">
                            <div className={`single-container ${checked === 'single' && 'checked'}`}>
                                <input autoComplete="off" id="single" type={'radio'} name='room-type' onChange={()=> setChecked('single')} checked={checked==='single'} />
                                <label htmlFor="single">Single</label>
                            </div>
                            <div className={`double-container ${checked === 'double' && 'checked'}`}>
                                <input autoComplete="off" id="double" type={'radio'} name='room-type' onChange={()=> setChecked('double')} checked={checked==='double'} />
                                <label htmlFor="double">Double</label>
                            </div>
                            <div className={`king-container ${checked === 'king' && 'checked'}`}>
                                <input autoComplete="off" id="king" type={'radio'} name='room-type' onChange={()=> setChecked('king')} checked={checked==='king'} />
                                <label htmlFor="king">King</label>
                            </div>
                        </div>

                        <div className="room-details">
                            <div className="room-details-input">
                                <label htmlFor="city">City/Location</label>
                                <input autoComplete="off" id="city" type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)} value={city} />
                            </div>
    
                            <div className="room-details-input">
                                <label htmlFor="check-in">Check In</label>
                                <nav className="check-in-display">
                                    <p><span>{checkIn.date}</span>
                                    {checkIn.month}'{checkIn.year}
                                    <br/>{checkIn.day}</p>
                                    <input autoComplete="off" id="check-in" type="date" min={checkIn.min} value={checkIn.value} onChange={checkInChange} />
                                </nav>
                            </div>
    
                            <div className="room-details-input">
                                <label htmlFor="check-out">Check Out</label>
                                <nav className="check-out-display">
                                    <p><span>{checkOut.date}</span>
                                    {checkOut.month}'{checkOut.year}
                                    <br/>{checkOut.day}</p>
                                    <input autoComplete="off" id="check-out" type="date" min={checkOut.min} value={checkOut.value} onChange={checkOutChange} />
                                </nav>
                            </div>

                            <div className="room-details-input">
                                <label htmlFor="guests">Guests</label>
                                <input autoComplete="off" id="guests" type="text" placeholder="Guests" onChange={guestsHandler} value={guests} />
                            </div>
                        </div>
                        <button type="submit" id="search-btn">Search</button>
                    </form>
                </div>
            </div>
        )
    }
    else if(type === 'trains'){
        const [checked, setChecked] = useState('one');
        const [state, setState] = useState({
            formValue: 'Delhi',
            toValue: 'Mumbai',
        })
        const [getDeparture, setDeparture] = useState({
            min: today.date,
            value: today.date,
            date: Number(today.dd),
            month: months[Number(today.mm)-1],
            year: `${today.yyyy}`.slice(2,4),
            day: today.day,
        });
        const [getReturn, setReturn] = useState({
            value: today.date,
            min: today.date,
            date: Number(today.dd),
            month: months[Number(today.mm)-1],
            year: `${today.yyyy}`.slice(2,4),
            day: today.day,
        });
        const departureChange= (e)=>{
            let date = new Date(e.target.value);
            const currentDate = getDate(date);
            setDeparture({
                ...getDeparture,
                value: currentDate.date,
                date: Number(currentDate.dd),
                month: months[Number(currentDate.mm)-1],
                year: `${currentDate.yyyy}`.slice(2,4),
                day: currentDate.day,
            });
    
            const dayAfter = getDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
            setReturn({
                min: currentDate.date,
                value: dayAfter.date,
                date: Number(dayAfter.dd),
                month: months[Number(dayAfter.mm)-1],
                year: `${dayAfter.yyyy}`.slice(2,4),
                day: dayAfter.day,
            })
        }
        const returnChange= (e)=>{
            let date = new Date(e.target.value);
            const currentDate = getDate(date);
            setReturn({
                ...getReturn,
                value: currentDate.date,
                date: Number(currentDate.dd),
                month: months[Number(currentDate.mm)-1],
                year: `${currentDate.yyyy}`.slice(2,4),
                day: currentDate.day,
            });
        }
        return (
            <div className="search-content-container">
                <div className="search-content">
                    <form onSubmit={(e)=> e.preventDefault()} className="search-content-form">
                        <div className="trip-type">
                            <div className={`one-way-container ${checked === 'one' && 'checked'}`}>
                                <input autoComplete="off" id="one-way" type={'radio'} name='trip-type' onChange={()=> setChecked('one')} checked={checked==='one'} />
                                <label htmlFor="one-way">One Way</label>
                            </div>
                            <div className={`round-trip-container ${checked === 'round' && 'checked'}`}>
                                <input autoComplete="off" id="round-trip" type={'radio'} name='trip-type' onChange={()=> setChecked('round')} checked={checked==='round'} />
                                <label htmlFor="round-trip">Round Trip</label>
                            </div>
                            <div className={`multi-city-container ${checked === 'multi' && 'checked'}`}>
                                <input autoComplete="off" id="multi-city" type={'radio'} name='trip-type' onChange={()=> setChecked('multi')} checked={checked==='multi'} />
                                <label htmlFor="multi-city">Multi City</label>
                            </div>
                        </div>
                        <div className="trip-details">
                            <div className="trip-details-input">
                                <label htmlFor="from">From</label>
                                <input autoComplete="off" id="from" type="text" placeholder="From" onChange={(e)=>setState({...state, formValue: e.target.value})} value={state.formValue} />
                            </div>
                            <div className="trip-details-input">
                                <label htmlFor="to">To</label>
                                <input autoComplete="off" id="to" type="text" placeholder="To" onChange={(e)=>setState({...state, toValue: e.target.value})} value={state.toValue} />
                            </div>
    
                            <div className="trip-details-input">
                                <label htmlFor="departure">Departure</label>
                                <nav className="departure-display">
                                    <p><span>{getDeparture.date}</span>
                                    {getDeparture.month}'{getDeparture.year}
                                    <br/>{getDeparture.day}</p>
                                    <input autoComplete="off" id="departure" type="date" min={getDeparture.min} value={getDeparture.value} onChange={departureChange} />
                                </nav>
                            </div>
    
                            <div className="trip-details-input">
                                <label htmlFor="return">Return</label>
                                <nav className="return-display">
                                    <p><span>{getReturn.date}</span>
                                    {getReturn.month}'{getReturn.year}
                                    <br/>{getReturn.day}</p>
                                    <input autoComplete="off" id="return" type="date" min={getReturn.min} value={getReturn.value} onChange={returnChange} />
                                </nav>
                            </div>
                        </div>
                        <button type="submit" id="search-btn">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default SearchContent;