import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from './sidebar';

export default function ManagerDashboard() {
    const [totalBookings, setTotalBookings] = useState(0);
    const [approvedBookings, setApprovedBookings] = useState(0);
    const [pendingBookings, setPendingBookings] = useState(0);
    const [occupiedRooms_g, setOccupiedRoomsG] = useState(0);
    const [occupiedRooms_b, setOccupiedRoomsB] = useState(0);
    const [occupiedRooms_d, setOccupiedRoomsD] = useState(0);
    const [Revenue, setRevenue] = useState(0);
    var totalRooms_g = 9;
    var totalRooms_b = 9;
    var totalRooms_d = 9;
    var freeRooms_g = totalRooms_g - occupiedRooms_g;
    var freeRooms_b = totalRooms_b - occupiedRooms_b;
    var freeRooms_d = totalRooms_d - occupiedRooms_d;
    var freeRooms = freeRooms_g + freeRooms_b + freeRooms_d;
    var occupiedRooms = occupiedRooms_g + occupiedRooms_b + occupiedRooms_d;
    const admin = 'Abdullah Tahir'

    const fetchData = async () => {
        fetch('https://obsidian-spotted-jingle.glitch.me/showbooked')
        .then(response => response.json())
            .then(data => {
                let occupiedG = 0;
                let occupiedB = 0;
                let occupiedD = 0;
                let revenue = 0;
            
                data.forEach(room => {
                  const roomNo = room.roomnum;
                  if (roomNo < 200) {
                    occupiedG++;
                  } else if (roomNo < 300) {
                    occupiedB++;
                  } else if (roomNo < 400) {
                    occupiedD++;
                  }
                  revenue += room.bill;
                });
            
                setOccupiedRoomsG(occupiedG);
                setOccupiedRoomsB(occupiedB);
                setOccupiedRoomsD(occupiedD);
                setRevenue(revenue)
            })
            .catch(error => {
            console.error('Error fetching room data:', error);
        });
        
        fetch('https://obsidian-spotted-jingle.glitch.me/getbookdata')
        .then(response => response.json())
            .then(data => {
                let BookingsT = 0;
                let BookingsA = 0;
                let BookingsP = 0;
            
                data.forEach(booking => {
                  const status = booking.status;
                  if (status === 'Approved') {
                    BookingsA++;
                  } else if (status === 'Pending') {
                    BookingsP++;
                  }
                  BookingsT++;
                });
                
                setTotalBookings(BookingsT);
                setApprovedBookings(BookingsA);
                setPendingBookings(BookingsP);
                console.log(totalBookings, approvedBookings, pendingBookings)
            })
            .catch(error => {
            console.error('Error fetching booking data:', error);
        });
    };

    useEffect(() => {
        fetchData();
    
        const interval = setInterval(() => {
          fetchData();
        }, 1 * 60 * 1000);
    
        return () => {
          clearInterval(interval);
        };
    });

  return (
    <div className='manager-dashboard'>
        <div>
            <Sidebar/>
        </div>
        <div className='dash-dash'>
            <div className='main-content'>
                <div className='admin-dashboard'>
                    <span style={{color: 'rgba(100, 100, 100)'}}>Manager </span><span style={{color: 'black'}}>Dashboard</span> 
                </div>
                <div className='intro'>
                    <div className='welcome'>
                        <span style={{color: 'rgba(100, 100, 100)'}}>Welcome, </span><span style={{color: 'black'}}>{admin}</span>
                    </div> 
                    <p>You have <span style={{color:'rgb(241, 199, 61)'}}>{freeRooms} available</span> rooms and <span style={{color:'rgb(197, 111, 236)'}}>{occupiedRooms} available</span> rooms at Mirage Hotel</p>
                </div>
                <div className='card-parent'>
                    <div className='dashboard-card'>
                        <h3 style={{ textAlign: 'center'}}>
                            <span style={{color: 'rgba(100, 100, 100)'}}>
                                Ground&nbsp;
                            </span>
                            <span style={{color: 'black'}}>
                                Floor
                            </span>
                            <hr className="line" />
                        </h3>
                        <p style={{ marginLeft: '10px', color:'rgb(98, 92, 100)'}}>Total Rooms: {totalRooms_g}</p>
                        <p style={{ marginLeft: '10px', color:'rgb(197, 111, 236)'}}>Booked Rooms: {occupiedRooms_g}</p>
                        <p style={{ marginLeft: '10px', color:'rgb(241, 199, 61)'}}>Available Rooms: {freeRooms_g}</p>
                    </div>
                    <div className='dashboard-card'>
                        <h3 style={{ textAlign: 'center'}}>
                            <span style={{color: 'rgba(100, 100, 100)'}}>
                                Blackwater&nbsp;
                            </span>
                            <span style={{color: 'black'}}>
                                Floor
                            </span>
                            <hr className="line" />
                        </h3>
                        <p style={{ marginLeft: '10px', color:'rgb(98, 92, 100)'}}>Total Rooms: {totalRooms_b}</p>
                        <p style={{ marginLeft: '10px', color:'rgb(197, 111, 236)'}}>Booked Rooms: {occupiedRooms_b}</p>
                        <p style={{ marginLeft: '10px', color:'rgb(241, 199, 61)'}}>Available Rooms: {freeRooms_b}</p>
                    </div>
                    <div className='dashboard-card'>
                        <h3 style={{ textAlign: 'center'}}>
                            <span style={{color: 'rgba(100, 100, 100)'}}>
                                Diamond&nbsp;
                            </span>
                            <span style={{color: 'black'}}>
                                Floor
                            </span>
                            <hr className="line" />
                        </h3>
                        <p style={{ marginLeft: '10px', color:'rgb(98, 92, 100)'}}>Total Rooms: {totalRooms_d}</p>
                        <p style={{ marginLeft: '10px', color:'rgb(197, 111, 236)'}}>Booked Rooms: {occupiedRooms_d}</p>
                        <p style={{ marginLeft: '10px', color:'rgb(241, 199, 61)'}}>Available Rooms: {freeRooms_d}</p>
                    </div>
                </div>
                <div className='card-parent'>
                    <div className='dashboard-card1'>
                        <h4 style={{color:'rgb(98, 92, 100)'}}>Total Bookings: {totalBookings}</h4>
                        <h4 style={{color:'rgb(197, 111, 236)'}}>Approved Bookings: {approvedBookings}</h4>
                        <h4 style={{color:'rgb(241, 199, 61)'}}>Pending Bookings: {pendingBookings}</h4>
                    </div>
                </div>
                <div className='card-parent'>
                    <div className='dashboard-card'>
                        <h3>Generated Revenue</h3>
                        <p>${Revenue}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}