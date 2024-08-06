import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

export default function ManageBookedRooms() {
  const [bookedRooms, setBookedRooms] = useState([]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    fetch('https://obsidian-spotted-jingle.glitch.me/showbooked')
      .then(response => response.json())
      .then(data => setBookedRooms(data))
      .catch(error => {
        console.error('Error fetching booked room data:', error);
      });
  }, []);

  const handleRestoreRoom = (id, roomNo) => {
    fetch(`https://obsidian-spotted-jingle.glitch.me/deletebookedroom/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      fetch(`https://obsidian-spotted-jingle.glitch.me/roomstatus/${roomNo}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ availability: 1, bookingID: null }),
      })
      .then(() => {
        setBookedRooms(prevBookedRooms => prevBookedRooms.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error updating availability:', error));
    })
    .catch(error => console.error('Error deleting booked room entry:', error));
  };

  return (
    <div className='rooms-main-dash'>
      <div className='room-dasd-sidebar'>
        <Sidebar/>
      </div>
      <div className='room-con-dash'>
        <div style={{ display: 'flex', flexWrap: 'flex' }}>
          <h2 id='booked'>Booked Rooms</h2>
          <Link style={{ marginLeft: '360px', marginTop: '15px' }} to='managerooms'>
            <button className='mr-book'>Available Rooms</button>
          </Link>
          <Link style={{ marginRight: '20px', marginTop: '15px' }} to='bookingHistroy'>
            <button className='mr-book'>Booking Histroy</button>
          </Link>
        </div>
        <div className="booked-rooms">
          {bookedRooms.map(room => (
            <div key={room.id} className="dash-room-card-book">
              <div style={{display: 'flex'}}>
                <div style={{paddingRight: '20px', marginRight: '20px', borderRight: '3px solid rgba(37, 29, 17) '}}>
                  <h3 style={{textAlign: 'center'}}>Room Details</h3>
                  <hr className="line" />
                  <p>Room: {room.roomnum}</p>
                  <p>Floor: {room.floor}</p>
                  <p>Price/Day: {room.rent}</p>
                  <p>Booking ID: {room.bookingId}</p>
                  <p>Servant: {room.servant}</p>
                  <p>Servant contact: {room.sercontact}</p>
                  <p>Capacity: {room.capacity}</p>
                </div>
                <div>
                  <h3 style={{textAlign: 'center'}}>Guest Details</h3>
                  <hr className="line" />
                  <p>Guest Name: {room.guestname}</p>
                  <p>Cnic: {room.cnic}</p>
                  <p>Phone: {room.phone}</p>
                  <p>Persons: {room.persons}</p>
                  <p>Arrival: {formatDate(room.arrival)}</p>
                  <p>Departure: {formatDate(room.departure)}</p>
                  <p>Bill: ${room.bill}</p>
                </div>
              </div>
              <button style={{ marginLeft: '165px', marginTop: '20px' }} onClick={() =>handleRestoreRoom(room.id, room.roomnum)} className='mr-book'>Restore Room</button>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}