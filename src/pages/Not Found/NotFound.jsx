import React, { useContext, useEffect } from "react";
import { MyContext } from "../../components/Context/Context";
import './NotFound.css';

const NotFound =()=>{
    const myContext = useContext(MyContext);
    useEffect(()=>{
        myContext.onHomePage(false);
    },[])

    return(
        <div className="not-found-container">
            <div className='not-found'>
                <img src={'../../MakeMyTrip 404.png'} alt="404" />
                <p>Page Not Found</p>
                <span>We can't seem to find the page</span>
                <span>you are looking for.</span> 
            </div>
        </div>
    )
}
export default NotFound;