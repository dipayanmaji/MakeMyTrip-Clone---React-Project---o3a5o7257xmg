import React, { useEffect, useState } from "react";
import SearchContent from "../../components/Search Content/SearchContent";
import './Flights.css';
const Flights= ()=>{
    const [data, setData] = useState([]);
    const getApi = async()=>{
        const response = await fetch('https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights');
        const data = await response.json();
        console.log(data);
        return data;
    }
    useEffect(()=>{
        setData(getApi());
    },[])
    return(
        <div className="flights">
            <SearchContent />
            
        </div>
    )
}
export default Flights;