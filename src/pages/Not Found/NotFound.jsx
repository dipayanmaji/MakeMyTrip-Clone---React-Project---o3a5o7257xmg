import React, { useContext, useEffect } from "react";
import { MyContext } from "../../components/Context/Context";
import './NotFound.css';

const NotFound =()=>{
    const myContext = useContext(MyContext);
    useEffect(()=>{
        myContext.onHomePage(false);
    },[])

    return(
        <div>
            404 Not Found
        </div>
    )
}
export default NotFound;