import '../styles/App.css';
import React from 'react'
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

const App = () => {
  return (
    <ContextProvider>
      <Header />
      {/* <Header2 /> */}
      <div id="main">
        {/* <div className='routes'> */}
          <Routes>
            <Route path='/' element={<Flights />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/flights' element={<Flights />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/trains' element={<Trains />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        {/* </div> */}
      </div>
      <Footer />
    </ContextProvider>
  )
}

export default App;