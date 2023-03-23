import './FetchTickets.css';
import React, { useContext } from "react";
import { getDate } from "../Search Content/getDate";
import { useNavigate } from 'react-router';
import { MyContext } from '../Context/Context';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';

const months = [' Jan',' Feb',' Mar',' Apr',' May',' Jun',' Jul',' Aug',' Sep',' Oct',' Nov',' Dec'];

const FetchTickets= ({type, ticket})=>{
    const myContext = useContext(MyContext);
    const navigate = useNavigate();
    const bookClicked= (e)=>{
        if(myContext.currUser.email === ''){
            myContext.displayPortal(true);
            return;
        }
        myContext.setPrice(e.target.value);
        navigate('/checkout')
    }

    if(type === 'flights'){
        const departureDate = getDate(new Date(ticket.departure.departureDate));
        const returnDate = getDate(new Date(ticket.return.returnDate));
        return(
            <div className="fetch-tickets">
                <nav className="left-section">
                    <div>From: <br />
                        <p className="detail">{ticket.from}</p>
                    </div>
                    <div>To: <br />
                        <p className="detail">{ticket.to}</p>
                    </div>
                    <div>Airline: <br />
                        <p className="detail">{ticket.airlineName}</p>
                    </div>
                </nav>

                <nav className="middle-section">
                    <div>Departure: <br />
                        <p className="detail">
                            {Number(departureDate.dd)}
                            <span>{`${months[Number(departureDate.mm)-1]}'${`${departureDate.yyyy}`.slice(2,4)}, ${departureDate.day}`}</span>
                        </p><br />
                        <p className="detail">{ticket.departure?.departureTime}</p>
                    </div>
                    <div>Return: <br />
                        <p className="detail">
                            {Number(returnDate.dd)}
                            <span>{`${months[Number(returnDate.mm)-1]}'${`${returnDate.yyyy}`.slice(2,4)}, ${returnDate.day}`}</span>
                        </p><br />
                        <p className="detail">{ticket.return?.returnTime}</p>
                    </div>
                </nav>

                <nav className="right-section">
                    <div>Price: <br />
                        <p className="detail">₹ {ticket.price}</p>
                    </div>
                    {ticket.via.length > 0 && <div>Via: <br />
                        <p className="detail">{ticket.via}</p>
                    </div>}
                    <div>Duration: <br />
                        <p className="detail">{ticket.duration}</p>
                    </div>
                </nav>
                <button value={ticket.price} onClick={bookClicked} id="book-btn">Book</button>

                {myContext.portalView && createPortal(<Modal type={'notLogedIn'} />,document.getElementById('portal'))}
            </div>
        )
    }
    else if(type === 'hotels'){
        const checkIn = getDate(new Date(ticket.check_in));
        const checkOut = getDate(new Date(ticket.check_out));
        return(
            <div className="fetch-tickets">
                <nav className="left-section">
                    <div>Hotel: <br />
                        <p className="detail">{ticket.hotel_name}</p>
                    </div>
                    <div>City: <br />
                        <p className="detail">{ticket.city}</p>
                    </div>
                    <div>Rating: <br />
                        <p className="detail">{ticket.rating}<span>/10</span> </p>
                    </div>
                </nav>

                <nav className="middle-section">
                    <div>Check In: <br />
                        <p className="detail">
                            {Number(checkIn.dd)}
                            <span>{`${months[Number(checkIn.mm)-1]}'${`${checkIn.yyyy}`.slice(2,4)}, ${checkIn.day}`}</span>
                        </p><br />
                    </div>
                    <div>Check Out: <br />
                        <p className="detail">
                            {Number(checkOut.dd)}
                            <span>{`${months[Number(checkOut.mm)-1]}'${`${checkOut.yyyy}`.slice(2,4)}, ${checkOut.day}`}</span>
                        </p><br />
                    </div>
                </nav>

                <nav className="right-section">
                    <div>Price: <br />
                        <p className="detail">₹ {ticket.price_per_night} <span>per night</span></p>
                    </div>
                    <div>Room Type: <br />
                        <p className="detail">{ticket.room_type}</p>
                    </div>
                    <div>Guests: <br />
                        <p className="detail">{ticket.guests}</p>
                    </div>
                </nav>
                <button value={ticket.price_per_night} onClick={bookClicked} id="book-btn">Book</button>
                {myContext.portalView && createPortal(<Modal type={'notLogedIn'} />,document.getElementById('portal'))}
            </div>
        )
    }
    else if(type === 'trains'){
        const departureDate = getDate(new Date(ticket.departure.departureDate));
        return(
            <div className="fetch-tickets">
                <nav className="left-section">
                    <div>From: <br />
                        <p className="detail">{ticket.from}</p>
                    </div>
                    <div>To: <br />
                        <p className="detail">{ticket.to}</p>
                    </div>
                    <div>Train Number: <br />
                        <p className="detail">{ticket.train_number}</p>
                    </div>
                </nav>

                <nav className="middle-section">
                    <div>Departure Date: <br />
                        <p className="detail">
                            {Number(departureDate.dd)}
                            <span>{`${months[Number(departureDate.mm)-1]}'${`${departureDate.yyyy}`.slice(2,4)}, ${departureDate.day}`}</span>
                        </p><br />
                    </div>
                    <div>Departure Time: <br />
                        <p className="detail">{ticket.departure.departureTime}</p>
                    </div>
                </nav>

                <nav className="right-section">
                    <div>Price: <br />
                        <p className="detail">₹ {ticket.price}</p>
                    </div>
                    <div>Kilometers: <br />
                        <p className="detail">{ticket.kilometers}</p>
                    </div>
                    <div>Duration: <br />
                        <p className="detail">{ticket.duration}</p>
                    </div>
                </nav>
                <button value={ticket.price} onClick={bookClicked} id="book-btn">Book</button>
                {myContext.portalView && createPortal(<Modal type={'notLogedIn'} />,document.getElementById('portal'))}
            </div>
        )
    }
}
export default FetchTickets;