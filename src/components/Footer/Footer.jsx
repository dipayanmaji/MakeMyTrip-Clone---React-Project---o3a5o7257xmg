import React from "react";
import './Footer.css';
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer= ()=>{
    return(
        <div className="footer">
            <div className="footer-contents">
                <div className="media-link">
                    <h1><a href="https://www.linkedin.com/in/dipayanmaji/" target={'_blank'}><FaLinkedinIn /></a></h1>
                    <h1><a href="https://twitter.com/dipayanmaji11" target={'_blank'}><FaTwitter /></a></h1>
                    <h1><a href="https://www.facebook.com/dip.ayan.716/" target={'_blank'}><FaFacebookF /></a></h1>
                </div>
                <div className="copyright">
                    <h3>© 2023 <Link to={'/'}>MAKEMYTRIP CLONE</Link></h3> by <a href="https://www.linkedin.com/in/dipayanmaji/" target={'_blank'}>Dipayan</a>
                    <br/>
                    Country <h3><Link to={'/india'}>India</Link> USA UAE</h3>
                </div>
            </div>
        </div>
    )
}
export default Footer;