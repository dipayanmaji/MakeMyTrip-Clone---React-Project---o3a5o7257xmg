import './Header2.css';
import logo from '../../images/MakeMyTrip-logo-blue.png'
import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHotel, FaTrain } from "react-icons/fa";
import { MyContext } from '../Context/Context';

const Header2= ()=>{
    const myContext = useContext(MyContext);

    return(
        <nav className='header2'>
            <div className='header2-contents'>
                <Link to={'/'}><img className='logo2' src={logo} alt="MakeMyTrip" /></Link>
                <div className='pages-link2'>
                    <NavLink className={`page-link2 ${myContext.intoHome && 'active'}`} to={'/flights'}><GiCommercialAirplane /> Flights</NavLink>
                    <NavLink className={'page-link2'} to={'/hotels'}><FaHotel/> Hotels</NavLink>
                    <NavLink className={'page-link2'} to={'/trains'}><FaTrain/> Trains</NavLink>
                </div>
                {
                    myContext.loggedIn ?
                    <Link to={'/dashboard'} className='user-profile2'>
                        <img className='user-image2' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAMFBMVEXk5ueutLe+wsTn6eqrsbSorrLZ3N3h4+Syt7rQ09W4vcDW2dvq7OzIzM7d4OG7wMNVLcDiAAADHElEQVR4nO2ayXLDIAxAwcKYnf//23pJ2ziJbYkgkgNvppde/EYgEFKE6HQ6nU6n0+l0Op0OAgD47PcDiJS0TiKEz5gE4aNT44bMUbePCKQolZJ/KKWMnZpqQMr3BjdGGdtFAyCOzwpbPGxo5KDla4VVI4sWwQB7rLBYmMRvEeJ45rCguS1CPI3DFgxmi4u1+LVIrA7pci1WDKfEhInDEorMtyCQkRJSWS4L8FiH2YLJQQS0wiwx8IQCrk+Ie4uJRUIYgoNUkSMU4CmBYEpTfGrcQsGRIBNJYZZwDLc6IT9vFvUdwkCW8NXXI5ByY5VgyA9qIDgukESWkKa2BOXe+KO6BKqa2VM9PYokal8fgKgt+SUKIjF+g0T9PVGSHbUlvuKcQBfa/zCcmF9xdwRiTcNyi9LTg6PUTUQHaRgqK3DEQHDUmGCJ1TbPw4P27uB5gtHusJGpRwEECa63KCkU1W/Qfwt0gvC8RDewt5hyjK0zdJryds5Q77CRuYeIeQ2ObA2rX65jwdc0u7O46hrVv8FfEOzBoGENg2k0eQGRD4KhVGw071g0vHsx+VEqNx1AgfBuvyhKqYF9xvBEmOwgl2ng+mcG+5n56PzVSXtrrU/TZ0a080dhR+NRMYQgtI0xO7NshRlpXB6i9VMILbIDYFoHw+unH3JDzf920SbgFJnDraOTT59/cJFm8BPT0gDowZyclfcio8y+fjxgmY2TSv712KgZjvloyidT4UMNZ+uNi0G/OqQxjKbSERa0oz299hqyQnUBaXhDYUGZd68UsPS98KwxvLM1QLyzEncWUhfna0nb8Eij9DFU0sQ9tnBF9Q68uyMfLIqKT1cxDpsG/ScmprZDgUX1OKwWpBWhDmLRELoWVfNiB352XfF8eATdRYKpam7uQb/YiV1TGrhfHjEuxiqBG0BwKiwWHhEItsz4BdF4B8ZduTFedlGYd8TKZX8RyFMmOpfTmIKhH13iosLh35YLF+tBHe8Ucn5gUX9CVMbFUVEyjC6QON0ULRJ0kchn51WbfTkXvecSQxtO0wMacboxO51Op/Pd/ADgoCQ35HRZWgAAAABJRU5ErkJggg==' alt='profile img' />
                        <p className='user-name2'>{myContext.currUser.name.split(' ')[0]}</p>
                    </Link>
                    :
                    <Link to={'/login'} className='user-profile2'>
                        <img className='user-image2' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAMFBMVEXk5ueutLe+wsTn6eqrsbSorrLZ3N3h4+Syt7rQ09W4vcDW2dvq7OzIzM7d4OG7wMNVLcDiAAADHElEQVR4nO2ayXLDIAxAwcKYnf//23pJ2ziJbYkgkgNvppde/EYgEFKE6HQ6nU6n0+l0Op0OAgD47PcDiJS0TiKEz5gE4aNT44bMUbePCKQolZJ/KKWMnZpqQMr3BjdGGdtFAyCOzwpbPGxo5KDla4VVI4sWwQB7rLBYmMRvEeJ45rCguS1CPI3DFgxmi4u1+LVIrA7pci1WDKfEhInDEorMtyCQkRJSWS4L8FiH2YLJQQS0wiwx8IQCrk+Ie4uJRUIYgoNUkSMU4CmBYEpTfGrcQsGRIBNJYZZwDLc6IT9vFvUdwkCW8NXXI5ByY5VgyA9qIDgukESWkKa2BOXe+KO6BKqa2VM9PYokal8fgKgt+SUKIjF+g0T9PVGSHbUlvuKcQBfa/zCcmF9xdwRiTcNyi9LTg6PUTUQHaRgqK3DEQHDUmGCJ1TbPw4P27uB5gtHusJGpRwEECa63KCkU1W/Qfwt0gvC8RDewt5hyjK0zdJryds5Q77CRuYeIeQ2ObA2rX65jwdc0u7O46hrVv8FfEOzBoGENg2k0eQGRD4KhVGw071g0vHsx+VEqNx1AgfBuvyhKqYF9xvBEmOwgl2ng+mcG+5n56PzVSXtrrU/TZ0a080dhR+NRMYQgtI0xO7NshRlpXB6i9VMILbIDYFoHw+unH3JDzf920SbgFJnDraOTT59/cJFm8BPT0gDowZyclfcio8y+fjxgmY2TSv712KgZjvloyidT4UMNZ+uNi0G/OqQxjKbSERa0oz299hqyQnUBaXhDYUGZd68UsPS98KwxvLM1QLyzEncWUhfna0nb8Eij9DFU0sQ9tnBF9Q68uyMfLIqKT1cxDpsG/ScmprZDgUX1OKwWpBWhDmLRELoWVfNiB352XfF8eATdRYKpam7uQb/YiV1TGrhfHjEuxiqBG0BwKiwWHhEItsz4BdF4B8ZduTFedlGYd8TKZX8RyFMmOpfTmIKhH13iosLh35YLF+tBHe8Ucn5gUX9CVMbFUVEyjC6QON0ULRJ0kchn51WbfTkXvecSQxtO0wMacboxO51Op/Pd/ADgoCQ35HRZWgAAAABJRU5ErkJggg==' alt='profile img' />
                        <p className='user-name2'>Login</p>
                    </Link>
                }
            </div>
        </nav>
    )
}
export default Header2;