import './Flights.css';
import React, { useEffect, useState } from "react";
import FetchTickets from "../../components/Fetch Tickets/FetchTickets";
import SearchContent from "../../components/Search Content/SearchContent";

const Flights= ()=>{
    const [tickets, setTickets] = useState([]);
    const [loader, setLoader] = useState(false);
    const getApi = async()=>{
        setLoader(true);
        try{
            const response = await fetch('https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights');
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
        <div className="flights">
            <SearchContent type={'flights'} />
            <div className="flghts-tickets-container">
                <h1>Available Tickets</h1>
                {
                    loader? <div className="loader">Fetching Available Tickets...</div> :
                    <div className="flghts-tickets">
                        {
                            tickets.map((ticket, index)=>(
                                <FetchTickets key={index} type={'flights'} ticket={ticket} />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}
export default Flights;