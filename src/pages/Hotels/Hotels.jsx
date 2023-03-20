import './Hotels.css';
import React, { useEffect, useState } from "react";
import FetchTickets from '../../components/Fetch Tickets/FetchTickets';
import SearchContent from '../../components/Search Content/SearchContent';

const Hotels= ()=>{
    const [hotels, sethotels] = useState([]);
    const [loader, setLoader] = useState(false);
    const getApi = async()=>{
        setLoader(true);
        try{
            const response = await fetch('https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels');
            const data = await response.json();
            console.log(data);
            sethotels([...data]);
            setLoader(false);
        }catch(error){
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