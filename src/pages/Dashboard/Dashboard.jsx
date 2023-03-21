import './Dashboard.css';
import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../components/Context/Context';
import Modal from '../../components/Modal/Modal';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';

const Dashboard= ()=>{
    const navigate = useNavigate();
    const myContext = useContext(MyContext);
    useEffect(()=>{
        myContext.onHomePage(false);
        if(myContext.currUser.email === ''){
            navigate('/')
        }
    },[])

    const singOutClicked= ()=>{
        myContext.loggedInSetter(false);
        myContext.addCurrUser({
            name:'',
            email:'',
            password:'',
        })
        myContext.displayPortal(true);
    }

    return(
        <div className='dashboard-container'>
            <div className='dashboard'>
                <div className='left-side'>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAMFBMVEXk5ueutLe+wsTn6eqrsbSorrLZ3N3h4+Syt7rQ09W4vcDW2dvq7OzIzM7d4OG7wMNVLcDiAAADHElEQVR4nO2ayXLDIAxAwcKYnf//23pJ2ziJbYkgkgNvppde/EYgEFKE6HQ6nU6n0+l0Op0OAgD47PcDiJS0TiKEz5gE4aNT44bMUbePCKQolZJ/KKWMnZpqQMr3BjdGGdtFAyCOzwpbPGxo5KDla4VVI4sWwQB7rLBYmMRvEeJ45rCguS1CPI3DFgxmi4u1+LVIrA7pci1WDKfEhInDEorMtyCQkRJSWS4L8FiH2YLJQQS0wiwx8IQCrk+Ie4uJRUIYgoNUkSMU4CmBYEpTfGrcQsGRIBNJYZZwDLc6IT9vFvUdwkCW8NXXI5ByY5VgyA9qIDgukESWkKa2BOXe+KO6BKqa2VM9PYokal8fgKgt+SUKIjF+g0T9PVGSHbUlvuKcQBfa/zCcmF9xdwRiTcNyi9LTg6PUTUQHaRgqK3DEQHDUmGCJ1TbPw4P27uB5gtHusJGpRwEECa63KCkU1W/Qfwt0gvC8RDewt5hyjK0zdJryds5Q77CRuYeIeQ2ObA2rX65jwdc0u7O46hrVv8FfEOzBoGENg2k0eQGRD4KhVGw071g0vHsx+VEqNx1AgfBuvyhKqYF9xvBEmOwgl2ng+mcG+5n56PzVSXtrrU/TZ0a080dhR+NRMYQgtI0xO7NshRlpXB6i9VMILbIDYFoHw+unH3JDzf920SbgFJnDraOTT59/cJFm8BPT0gDowZyclfcio8y+fjxgmY2TSv712KgZjvloyidT4UMNZ+uNi0G/OqQxjKbSERa0oz299hqyQnUBaXhDYUGZd68UsPS98KwxvLM1QLyzEncWUhfna0nb8Eij9DFU0sQ9tnBF9Q68uyMfLIqKT1cxDpsG/ScmprZDgUX1OKwWpBWhDmLRELoWVfNiB352XfF8eATdRYKpam7uQb/YiV1TGrhfHjEuxiqBG0BwKiwWHhEItsz4BdF4B8ZduTFedlGYd8TKZX8RyFMmOpfTmIKhH13iosLh35YLF+tBHe8Ucn5gUX9CVMbFUVEyjC6QON0ULRJ0kchn51WbfTkXvecSQxtO0wMacboxO51Op/Pd/ADgoCQ35HRZWgAAAABJRU5ErkJggg==' alt='profile img' />
                    <br />
                    <button onClick={singOutClicked}>Sing Out</button>
                </div>
                <div className='right-side'>
                    <p>Hii <span id='name'>{myContext.currUser.name}</span></p>
                    <p>Your email id is <span id='email'>{myContext.currUser.email}</span></p>
                </div>
            </div>
            {myContext.portalView && createPortal(<Modal type={'logOut'} />, document.getElementById('portal'))}
        </div>
    )
}
export default Dashboard;