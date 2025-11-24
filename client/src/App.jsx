import React from 'react';
import Navbar from './components/Navbar';
import { Route,Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllStays from './pages/AllStays';
import StayDetails from './pages/StayDetails';
import MyBookings from './pages/MyBookings';
import StayReg from './components/StayReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard.jsx';
import AddRoom from './pages/hotelOwner/AddRoom';


const App = () => {
const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div >
      {!isOwnerPath && <Navbar/>}
      {false && <StayReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/stays' element= {<AllStays/>} />
          <Route path='/stays/:id' element= {<StayDetails/>} />
          <Route path='/my-bookings' element= {<MyBookings/>} />
          <Route path='/owner' element= {<Layout/>} >
            <Route index element={<Dashboard/>} />
            <Route path="add-room" element={<AddRoom/>} />

          </Route>    
        </Routes>
      </div>
        <Footer/>
    </div>
  );
};

export default App;