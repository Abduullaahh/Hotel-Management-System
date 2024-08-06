import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

export default function ManageBookings() {
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

  const handleApprove = (bookingId, gmail) => {
    fetch(`https://obsidian-spotted-jingle.glitch.me/bookstatus/${bookingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Approved', gmail: gmail }),
    })
      .then(response => response.json())
      .then(data => {
        const updated = bookings.map(booking =>
          booking.id === bookingId ? { ...booking, status: 'Approved' } : booking
        );
        setBookings(updated);
      })
      .catch(error => console.error('Error approving booking:', error));
  };

  const handleReject = (bookingId, gmail) => {
    fetch(`https://obsidian-spotted-jingle.glitch.me/deleterejected/${bookingId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gmail: gmail }),
    })
      .then(response => response.json())
      .then(data => {
        const updated = bookings.map(booking =>
          updated = bookings.filter(booking => booking.id !== bookingId),
        );
        setBookings(updated);
      })
      .catch(error => console.error('Error rejecting booking:', error));
  };

  return (
    <div className='book-dash-main'>
      <div>
        <Sidebar/>
      </div>
      <div className="manage-bookings">
        <div  style={{ display: 'flex', flexWrap: 'flex' }}>
          <h2>Pending Bookings</h2>
          <Link style={{ marginLeft: '350px', marginTop: '15px' }} to='approvedbook'><button className='mr-book'>Approved</button></Link>
        </div>
        <div className='dash-book-cards'>
          {bookings.map(booking => (
            booking.status === 'Pending' &&
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
                <button className='app' onClick={() => handleApprove(booking.id, booking.gmail)}>Approve</button>
                <button className='rej' onClick={() => handleReject(booking.id, booking.gmail)}>Reject</button>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}