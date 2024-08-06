import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';


export default function ManageRooms() {
  const [bookedRooms, setBookedRooms] = useState([]);
  const [booked, setBooked] = useState([]);
  const [rooms, setRooms] = useState([]);
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDateForDatabase = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const handleBookRoom = (servant, sercontact, rent, floor, roomNo, bookingId, capacity) => {
    const bookedRoom = rooms.find(room => room.roomNo === roomNo);
    if (bookedRoom && bookedRoom.availability) {
      fetch(`https://obsidian-spotted-jingle.glitch.me/getforroom/${bookingId}`)
        .then(response => response.json())
        .then(bookingData => {
          fetch(`https://obsidian-spotted-jingle.glitch.me/roomstatus/${roomNo}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ availability: 0, bookingID: bookingId }),
          })
          .then(response => response.json())
          .then(updatedRoom => {
            updatedRoom.bookingData = bookingData;
            
            const histroy = {
              name: bookingData.name,
              cnic: bookingData.cnic,
              phone: bookingData.phone,
              roomnum: roomNo,
              arrival: formatDateForDatabase(bookingData.arrival),
              departure: formatDateForDatabase(bookingData.departure),
              bookingId: bookingId,
              persons: bookingData.adults + bookingData.children,
              bill: calculateBill(formatDate(bookingData.arrival), formatDate(bookingData.departure), rent)
            };
            fetch('https://obsidian-spotted-jingle.glitch.me/historydata', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(histroy),
            })

            const bookingInfo = {
              servant: servant,
              sercontact: sercontact,
              roomnum: roomNo,
              floor: floor,
              rent: rent,
              capacity: capacity,
              bookingId: bookingId,
              guestName: bookingData.name,
              cnic: bookingData.cnic,
              phone: bookingData.phone,
              arrival: formatDateForDatabase(bookingData.arrival),
              departure: formatDateForDatabase(bookingData.departure),
              persons: bookingData.adults + bookingData.children,
              bill: calculateBill(formatDate(bookingData.arrival), formatDate(bookingData.departure), rent)
            };
            fetch('https://obsidian-spotted-jingle.glitch.me/bookedrooms', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(bookingInfo),
            })
            .then(response => response.json())
            .then(result => {
              console.log('Booking information stored:', result);
              setBookedRooms(prevAvailableRooms => prevAvailableRooms.filter(room => room.roomNo !== roomNo));
            })
            .catch(error => console.error('Error storing booking information:', error));
          })
          .catch(error => console.error('Error updating availability:', error));
        })
        .catch(error => console.error('Error fetching booking data:', error));
    }
  };  
  
  useEffect(() => {
    fetch('https://obsidian-spotted-jingle.glitch.me/getrooms')
      .then(response => response.json())
      .then(data => setRooms(data))
      .catch(error => { console.error('Error fetching room data:', error); });
  }, []);
  
  
  const availableRooms = rooms.filter(room => room.availability == 1);

  return (
    <div className='rooms-main-dash'>
      <div className='room-dasd-sidebar'>
        <Sidebar/>
      </div>
      <div className='room-con-dash'>
        <div style={{ display: 'flex', flexWrap: 'flex' }}>
          <h2>Available Rooms</h2>
          <Link style={{ marginLeft: '350px', marginTop: '15px' }} to='ManageBookedrooms'><button className='mr-book'>Booked Rooms</button></Link>
          <Link style={{ marginRight: '20px', marginTop: '15px' }} to='bookingHistroy'><button className='mr-book'>Booking Histroy</button></Link>
        </div>
        <div className="manage-rooms">
          {availableRooms.map(room => (
            <div key={room.id} className="dash-room-card">
              <h3 style={{textAlign: 'center'}}>Room {room.roomNo}</h3>
              <hr className="line" />
              <p>Description: {room.description}</p>
              <p>Capacity: {room.persons}</p>
              <p>Floor: {room.floor}</p>
              <p>Type: {room.type}</p>
              <p>Servant: {room.servant}</p>
              <p>Servant Contact: {room.sercontact}</p>
              <p>Price/Day: {room.rent}</p>
              <p>Availability: {room.availability ? 'Available' : 'Not Available'}</p>
              {room.availability && (
                <div>
                  <input className='mr-book-id' placeholder='Enter booking ID' style={{marginBottom: '10px'}} id={`bookingId${room.roomNo}`} type="text" />
                  <button className='mr-book' onClick={() => handleBookRoom(room.servant, room.sercontact, room.rent, room.floor, room.roomNo, document.getElementById(`bookingId${room.roomNo}`).value, room.persons)}>Book Now</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function calculateBill(arrivalDate, departureDate, rent) {
  const oneDay = 24 * 60 * 60 * 1000;
  const startDate = new Date(arrivalDate);
  const endDate = new Date(departureDate);
  const numberOfDays = Math.round(Math.abs((startDate - endDate) / oneDay));
  console.log('Total Bill:', numberOfDays * rent);
  return numberOfDays * rent;
}