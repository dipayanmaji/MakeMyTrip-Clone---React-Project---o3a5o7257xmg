import './Trains.css';
import React, { useEffect, useState } from "react";
import FetchTickets from '../../components/Fetch Tickets/FetchTickets';
import SearchContent from '../../components/Search Content/SearchContent';

const Trains= ()=>{
    const [tickets, setTickets] = useState([]);
    const [loader, setLoader] = useState(false);
    const getApi = async()=>{
        setLoader(true);
        try{
            const response = await fetch('https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains');
            const data = await response.json();
            setTickets([...data]);
            setLoader(false);
        }catch(error){
            console.error(error);
        }
    }
    useEffect(()=>{
        getApi();
    },[])

    return(
        <div className="trains">
            <SearchContent type={'trains'} />
            <div className="trains-tickets-container">
                <h1>Available Tickets</h1>
                {
                    loader? <div className="loader">Fetching Available Tickets...</div> :
                    <div className="trains-tickets">
                        {
                            tickets.map((ticket, index)=>(
                                <FetchTickets key={index} type={'trains'} ticket={ticket} />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}
export default Trains;