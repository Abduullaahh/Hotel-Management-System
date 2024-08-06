import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

export default function ApprovedBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('https://obsidian-spotted-jingle.glitch.me/getbookdata')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelete = (bookingId) => {
    fetch(`https://obsidian-spotted-jingle.glitch.me/deleteapproved/${bookingId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(() => {
        setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
      })
      .catch(error => console.error('Error approving booking:', error));
  };

  return (
    <div className='book-dash-main'>
      <div>
        <Sidebar/>
      </div>
      <div className="manage-bookings">
        <div style={{ display: 'flex', flexWrap: 'flex' }}>
            <h2>Approved Bookings</h2>
            <Link style={{ marginLeft: '350px', marginTop: '15px' }} to='managebookins'><button className='mr-book'>Pending Bookings</button></Link>
        </div>
        <div className='dash-book-cards'>
          {bookings.map(booking => (
            booking.status === 'Approved' &&
            (
              <div key={booking.id} className="booking-card">
                <h3 style={{textAlign: 'center'}}>Booking ID: {booking.id}</h3>
                <hr className="line" />
                <p>Name: {booking.name}</p>
                <p>CNIC: {booking.cnic}</p>
                <p>Phone: {booking.phone}</p>
                <p>Persons: {booking.children + booking.adults}</p>
                <p>Arrival Date: {formatDate(booking.arrival)}</p>
                <p>Departure Date: {formatDate(booking.departure)}</p>
                <p>Room no: {booking.roomNumber}</p>
                <p>Rent per Night: {booking.rentPerNight}</p>
                <p>Status: {booking.status}</p>
                <button style={{marginLeft: '75px'}} className='app' onClick={() => handleDelete(booking.id)}>Delete</button>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}