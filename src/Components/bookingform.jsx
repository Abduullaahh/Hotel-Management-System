import React from 'react';
import Footer from './footer';
import Navbar2 from './navbar2';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function BookingForm() {
  const location = useLocation();
  const { roomNumber, rentPerNight } = location.state;

  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleFormSubmit = () => {

    const bill = calculateBill(formatDate(arrivalDate), formatDate(departureDate), rentPerNight);

    window.alert(`Total Bill: $${bill}, payment will proceed after approval of your request from admin`);
  };

  function calculateBill(arrivalDate, departureDate, rent) {
    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(arrivalDate);
    const endDate = new Date(departureDate);
    const numberOfDays = Math.round(Math.abs((startDate - endDate) / oneDay));
    return numberOfDays * rent;
  }
  return (
    <div>
      <Navbar2/>
      <div className='form'>
        <form action="https://obsidian-spotted-jingle.glitch.me/userbookdata" method="post">
          <div className="booking-form">
            <div>
              <h2 style={{color: 'black'}}>
                Booking Form
              </h2>
            </div>
            <input name='name' className='inputs' type="text" placeholder="Name" />
            <input name='cnic' className='inputs' type="text" placeholder="CNIC" />
            <input name='email' className='inputs' type="email" placeholder="Email" />
            <input name='phone' className='inputs' type="tel" placeholder="Phone" />
            <input name='children' className='inputs' type="number" placeholder="No. of Childern" />
            <input name='adults' className='inputs' type="number" placeholder="No. of Adults" />
            <input
              name='arrival'
              className='inputs'
              type="date"
              placeholder="Arrival Date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
            <input
              name='departure'
              className='inputs'
              type="date"
              placeholder="Departure Date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            /><br />
            <input name='card' className='inputs' type="card" placeholder="Card Number" />
            <input name='exp' className='inputs' type="date" placeholder="Exp. Date" />
            <input name='cvc' className='inputs' type="cvc" placeholder="CVC" /><br />
            <input name='roomNumber' type='hidden' value={roomNumber} />
            <input name='rentPerNight' type='hidden' value={rentPerNight} />
            <button onClick={handleFormSubmit} className='book-button'>Book Now</button>
          </div>
        </form>
        <div>
          <img className='image' src="logo.jpg" alt="logo" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

// function calculateBill(arrivalDate, departureDate, rent) {
//   const oneDay = 24 * 60 * 60 * 1000;
//   const startDate = new Date(arrivalDate);
//   const endDate = new Date(departureDate);
//   const numberOfDays = Math.round(Math.abs((startDate - endDate) / oneDay));
//   console.log('Total Bill:', numberOfDays * rent);
//   return numberOfDays * rent;
// }