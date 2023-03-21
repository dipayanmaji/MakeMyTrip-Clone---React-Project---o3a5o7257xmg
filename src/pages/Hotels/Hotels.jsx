import './Hotels.css';
import React, { useContext, useEffect, useState } from "react";
import FetchTickets from '../../components/Fetch Tickets/FetchTickets';
import SearchContent from '../../components/Search Content/SearchContent';
import { useParams } from 'react-router';
import { MyContext } from '../../components/Context/Context';

const Hotels= ()=>{
    const myContext = useContext(MyContext);
    useEffect(()=>{
        myContext.onHomePage(false);
    },[])

    const [hotels, sethotels] = useState([]);
    const [loader, setLoader] = useState(false);
    const [faild, setFaild] = useState(false);
    const getApi = async()=>{
        setLoader(true);
        try{
            const response = await fetch('https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels');
            const data = await response.json();
            sethotels([...data]);
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
        <div className="hotels">
            <SearchContent type={'hotels'} />
            <div className="hotels-tickets-container">
                <h1>Available Hotels</h1>
                {faild && <div className='loader' style={{color:'red'}}>Something went worng. Check your internet connection.</div>}
                {
                    loader? <div className="loader">Fetching Available Hotels...</div> :
                    <div className="hotels-tickets">
                        {
                            hotels.map((hotel, index)=>(
                                <FetchTickets type={'hotels'} key={index} ticket={hotel} />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}
export default Hotels;