import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route for routing
import Navbar from '../component/Navbar/Navbar';  // Adjust the path to your Navbar component
import Home from '../component/Home/Home';  // Adjust the path to your Home component
import RestaurantDetails from '../component/Restaurant/RestaurantDetails';  // Adjust the path
import Cart from '../component/Cart/Cart';  // Adjust the path
import Profile from '../component/Profile/Profile';  // Adjust the path
import Auth from '../component/Auth/Auth';


const CustomerRoute = () => {
  return (
    <div>
     <Navbar/>   
      <Routes>
        
         <Route path='/' element={<Home/>}/>
         <Route path='/account/:register' element={<Home/>}/>
         <Route path='restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/my-profile/*' element={<Profile/>}/>
       
      </Routes>
      <Auth/>
    </div>
  )
}

export default CustomerRoute

// /my-profile/orders