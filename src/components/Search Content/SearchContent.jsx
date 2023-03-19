import React, { useState } from "react";
import './SearchContent.css';
import { getDate } from "./getDate";

const months = [' Jan',' Feb',' Mar',' Apr',' May',' Jun',' Jul',' Aug',' Sep',' Oct',' Nov',' Dec'];

const today = getDate(new Date());

const SearchContent= ()=>{
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
        <div className="search-content">
            <form onSubmit={(e)=> e.preventDefault()} className="search-content-form">
                <div className="trip-type">
                    <div className={`one-way-container ${checked === 'one' && 'checked'}`}>
                        <input id="one-way" type={'radio'} name='trip-type' onChange={()=> setChecked('one')} checked={checked==='one'} />
                        <label htmlFor="one-way">One Way</label>
                    </div>
                    <div className={`round-trip-container ${checked === 'round' && 'checked'}`}>
                        <input id="round-trip" type={'radio'} name='trip-type' onChange={()=> setChecked('round')} checked={checked==='round'} />
                        <label htmlFor="round-trip">Round Trip</label>
                    </div>
                    <div className={`multi-city-container ${checked === 'multi' && 'checked'}`}>
                        <input id="multi-city" type={'radio'} name='trip-type' onChange={()=> setChecked('multi')} checked={checked==='multi'} />
                        <label htmlFor="multi-city">Multi City</label>
                    </div>
                </div>
                <div className="trip-details">
                    <div className="trip-details-input">
                        <label htmlFor="from">From</label>
                        <input id="from" type="text" onChange={(e)=>setState({...state, formValue: e.target.value})} value={state.formValue} />
                    </div>
                    <div className="trip-details-input">
                        <label htmlFor="to">To</label>
                        <input id="to" type="text" onChange={(e)=>setState({...state, toValue: e.target.value})} value={state.toValue} />
                    </div>

                    <div className="trip-details-input">
                        <label htmlFor="departure">Departure</label>
                        <p className="departure-display">
                            <span>{getDeparture.date}</span>
                            {getDeparture.month}'{getDeparture.year}
                            <br/>{getDeparture.day}
                        </p>
                        <input id="departure" type="date" min={getDeparture.min} value={getDeparture.value} onChange={departureChange} />
                    </div>

                    <div className="trip-details-input">
                        <label htmlFor="return">Return</label>
                        <p className="return-display">
                            <span>{getReturn.date}</span>
                            {getReturn.month}'{getReturn.year}
                            <br/>{getReturn.day}
                        </p>
                        <input id="return" type="date" min={getReturn.min} value={getReturn.value} onChange={returnChange} />
                    </div>
                </div>
                <button type="submit" id="search-btn">Search</button>
            </form>
        </div>
    )
}
export default SearchContent;