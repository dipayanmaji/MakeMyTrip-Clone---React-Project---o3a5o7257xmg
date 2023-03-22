import '../styles/App.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router';
import Header from './Header/Header';
import Header2 from './Header2/Header2';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';
import Flights from '../pages/Flights/Flights';
import Hotels from '../pages/Hotels/Hotels';
import Trains from '../pages/Trains/Trains';
import Footer from './Footer/Footer';
import NotFound from '../pages/Not Found/NotFound';
import { ContextProvider } from './Context/Context';
import Dashboard from '../pages/Dashboard/Dashboard';
import Checkout from '../pages/Checkout/Checkout';




const App = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  window.addEventListener('scroll', ()=>{
    if(window.pageYOffset>72){ // 72 means 72px(or 4.5rem)
      setFixedHeader(true);
    }else{
      setFixedHeader(false);
    }
  })

  return (
    <ContextProvider>
      {fixedHeader? <Header2 />: <Header /> }
      <div id="main">
        <Routes>
          <Route path='/' element={<Flights />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/flights' element={<Flights />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/trains' element={<Trains />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
      <Footer />
    </ContextProvider>
  )
}

export default App;