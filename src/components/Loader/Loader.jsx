import './Loader.css';
import React from 'react';
import planeGif from '../../images/plane-gif.gif'
import hotelGif from '../../images/hotel-gif.gif'
import trainGif from '../../images/train-gif.gif'


const Loader= ({type, faild})=>{
    return(
        <div className='loader-container'>
            <div className="loader">
                {
                    faild ? <p style={{color:'pink'}}>Something went worng. Check your internet connection.</p>:
                    <>
                        {
                            type === 'flights' &&
                            <>
                                <img className='plane-gif' src={planeGif} alt="Plane" />
                                <p>Fetching Available Flights...</p>
                            </>
                        }
                        {
                            type === 'hotels' &&
                            <>
                                <img className='hotel-gif' src={hotelGif} alt="Hotel" />
                                <p>Fetching Available Hotels...</p>
                            </>
                        }
                        {
                            type === 'trains' &&
                            <>
                                <img className='train-gif' src={trainGif} alt="Train" />
                                <p>Fetching Available Trains...</p>
                            </>
                        }
                    </>
                }
            </div>
        </div>
    )
}
export default Loader;