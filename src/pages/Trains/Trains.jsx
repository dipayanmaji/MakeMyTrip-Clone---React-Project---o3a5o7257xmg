import './Trains.css';
import React, { useContext, useEffect, useState } from "react";
import FetchTickets from '../../components/Fetch Tickets/FetchTickets';
import SearchContent from '../../components/Search Content/SearchContent';
import { MyContext } from '../../components/Context/Context';

const Trains= ()=>{
    const myContext = useContext(MyContext);
    useEffect(()=>{
        myContext.onHomePage(false);
    },[])

    const [tickets, setTickets] = useState([]);
    const [loader, setLoader] = useState(false);
    const [faild, setFaild] = useState(false);
    const getApi = async()=>{
        setLoader(true);
        try{
            const response = await fetch('https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains');
            const data = await response.json();
            setTickets([...data]);
            setLoader(false);
        }catch(error){
            setLoader(false);
            setFaild(true);
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
                {faild && <div className='loader' style={{color:'red'}}>Something went worng. Check your internet connection.</div>}
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