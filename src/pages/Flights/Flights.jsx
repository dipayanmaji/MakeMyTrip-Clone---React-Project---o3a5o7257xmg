import './Flights.css';
import React, { useContext, useEffect, useState } from "react";
import FetchTickets from "../../components/Fetch Tickets/FetchTickets";
import SearchContent from "../../components/Search Content/SearchContent";
import { MyContext } from '../../components/Context/Context';
import Loader from '../../components/Loader/Loader';

const Flights= ()=>{
    const myContext = useContext(MyContext);
    useEffect(()=>{
        myContext.onHomePage(true);
    },[])

    const [tickets, setTickets] = useState([]);
    const [loader, setLoader] = useState(false);
    const [faild, setFaild] = useState(false);
    const getApi = async()=>{
        setLoader(true);
        try{
            const response = await fetch('https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights');
            const data = await response.json();
            setTickets([...data]);
            setTimeout(() => {
                setLoader(false);
            }, 5000);
        }catch(error){
            setFaild(true);
            console.error(error);
        }
    }
    useEffect(()=>{
        getApi();
    },[])
    return(
        <div className="flights">
            {
                loader? <Loader type={'flights'} faild={faild} /> :
                <>
                    <SearchContent type={'flights'} />
                    <div className="flghts-tickets-container">
                        <h1>Available Tickets</h1>
                        <div className="flghts-tickets">
                            {
                                tickets.map((ticket, index)=>(
                                    <FetchTickets key={index} type={'flights'} ticket={ticket} />
                                ))
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
export default Flights;