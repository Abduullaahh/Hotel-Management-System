import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

export default function BookingHistory() {
  const [roomNumberInput, setRoomNumberInput] = useState('');
  const [roomHistory, setRoomHistory] = useState([]); // State for room history

  const fetchRoomHistory = () => {
    const roomNumber = parseInt(roomNumberInput);
    if (roomNumber) {
      fetch(`https://obsidian-spotted-jingle.glitch.me/showhistroy/${roomNumber}`)
        .then(response => response.json())
        .then(data => setRoomHistory(data))
        .catch(error => {
          console.error('Error fetching room history:', error);
          setRoomHistory(null);
        });
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='rooms-main-dash'>
      <div className='room-dasd-sidebar'>
        <Sidebar/>
      </div>
      <div className='room-con-dash'>
        <div style={{ display: 'flex', flexWrap: 'flex' }}>
          <h2 id='booked'>Booking History</h2>
          <Link style={{ marginLeft: '350px', marginTop: '15px' }} to='managerooms'>
            <button className='mr-book'>Available Rooms</button>
          </Link>
          <Link style={{ marginRight: '20px', marginTop: '15px' }} to='ManageBookedrooms'>
            <button className='mr-book'>Booked Rooms</button>
          </Link>
        </div>
        <div className="hitory-main">
          <div className="room-grid">
            <input
              type="number"
              placeholder='Enter room number'
              value={roomNumberInput}
              onChange={(e) => setRoomNumberInput(e.target.value)}
            />
            <button onClick={fetchRoomHistory}>View History</button>
          </div>
          <div className='hitory-cards'>
            {roomHistory.map((history, index) => (
              <div className='hitory-card' style={{textAlign: 'left'}} key={index}>
                <h3 style={{textAlign: 'center'}}>Room no: {history.roomnum}</h3>
                <hr className="line" />
                <p>Booking ID: {history.bookingId}</p>
                <p>Name: {history.name}</p>
                <p>CNIC: {history.cnic}</p>
                <p>Phone: {history.phone}</p>
                <p>Persons: {history.persons}</p>
                <p>Arrival Date: {formatDate(history.arrival)}</p>
                <p>Departure Date: {formatDate(history.departure)}</p>
                <p>Bill: {history.bill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}