import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Carousel from './carousel';
import About from './about';
import Gallery from './gallery';
import Blog from './blog';
import Features from './features';
import CostumerReviews from './cosreview';
// import { faUser, faCog, faHome } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserPortal()
{
  return (
    <div id='homepage'>
      <Navbar/>
      <Carousel/>
      <About/>
      <Features/>
      <Gallery/>
      <Blog/>
      <CostumerReviews/>
      <Footer/>
      {/* <BookingForm/> */}
    </div>
  )
}
