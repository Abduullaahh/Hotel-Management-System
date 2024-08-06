import React from 'react'
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import
{
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
}
from 'mdb-react-ui-kit';
import Navbar3 from './navbar3';
import Footer from './footer';

export default function Rooms()
{
  return (
    <div className='rooms' id='rooms'>
        <Navbar3/>
        {/* <hr className='line'/> */}
        <h2 className='GDh2' id='ground'>Ground Floor</h2>
        <hr className='line'/>
        <div className='rooms-img'>
            <div className='cards-div'>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room1.jpg' alt='room1' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 101
                            </MDBCardTitle>
                            <MDBCardText>
                                This spacious room is designed to accommodate families, featuring
                                a comfortable arrangement with one double bed and two single beds.
                                Whether you're traveling with loved ones or friends, our family room
                                provides ample space and comfort for a relaxing stay.
                                <br /><b>4 Persons</b><br /><b>RENT: 50,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "101", rentPerNight: "50000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room2.jpg' alt='room2' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 102
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed for couples and friends, our charming room features a luxurious
                                double bed and two comfortable sofas. Experience a serene retreat that
                                combines elegance and companionship, providing the perfect setting for
                                memorable moments and relaxation.
                                <br /><b>2 Persons</b><br /><b>RENT: 25,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "102", rentPerNight: "25000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room3.jpg' alt='room3' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 103
                            </MDBCardTitle>
                            <MDBCardText>
                                Tailored for families and friends, our spacious room offers a lavish
                                king-size bed and two inviting sofas. Experience the perfect blend
                                of comfort and togetherness, creating lasting memories in a setting
                                designed for relaxation and bonding.
                                <br /><b>4 Persons</b><br /><b>RENT: 40,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "103", rentPerNight: "40000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='cards-div'>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room4.jpg' alt='room4' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 104
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed to accommodate families, couples, and friends, our expansive
                                room features two king-size beds and four comfortable sofas. Create
                                cherished moments in a versatile space that effortlessly combines comfort
                                and togetherness, ensuring an unforgettable stay.
                                <br /><b>4 Persons</b><br /><b>RENT: 50,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "104", rentPerNight: "50000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room5.jpg' alt='room5' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 105
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed for couples and friends, our charming room features a luxurious
                                double bed and two comfortable sofas. Experience a serene retreat that
                                combines elegance and companionship, providing the perfect setting for
                                memorable moments and relaxation.
                                <br /><b>2 Persons</b><br /><b>RENT: 25,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "105", rentPerNight: "25000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room6.jpg' alt='room6' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 106
                            </MDBCardTitle>
                            <MDBCardText>
                                Tailored for families and friends, our spacious room offers a lavish
                                king-size bed and two inviting sofas. Experience the perfect blend
                                of comfort and togetherness, creating lasting memories in a setting
                                designed for relaxation and bonding.
                                <br /><b>3 Persons</b><br /><b>RENT: 40,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "106", rentPerNight: "40000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>
            
            <div className='cards-div'>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room7.jpeg' alt='room7' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 107
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed to accommodate families, couples, and friends, our expansive
                                room features two king-size beds and four comfortable sofas. Create
                                cherished moments in a versatile space that effortlessly combines comfort
                                and togetherness, ensuring an unforgettable stay.
                                <br /><b>2 Persons</b><br /><b>RENT: 50,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "107", rentPerNight: "50000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room8.jpeg' alt='room8' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 108
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed for couples and friends, our charming room features a luxurious
                                double bed and two comfortable sofas. Experience a serene retreat that
                                combines elegance and companionship, providing the perfect setting for
                                memorable moments and relaxation.
                                <br /><b>2 Persons</b><br /><b>RENT: 25,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "108", rentPerNight: "25000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room9.jpeg' alt='room9' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 109
                            </MDBCardTitle>
                            <MDBCardText>
                                Tailored for families and friends, our spacious room offers a lavish
                                king-size bed and two inviting sofas. Experience the perfect blend
                                of comfort and togetherness, creating lasting memories in a setting
                                designed for relaxation and bonding.
                                <br /><b>3 Persons</b><br /><b>RENT: 40,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "109", rentPerNight: "40000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
        <hr className='line'/>
        <h2 id='black' className='bh2'>Blackwater Floor</h2>
        <hr className='line'/>
        <div className='rooms-img'>
            <div className='cards-div'>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room1.jpg' alt='room1' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 201
                            </MDBCardTitle>
                            <MDBCardText>
                                This spacious room is designed to accommodate families, featuring
                                a comfortable arrangement with one double bed and two single beds.
                                Whether you're traveling with loved ones or friends, our family room
                                provides ample space and comfort for a relaxing stay.
                                <br /><b>4 Persons</b><br /><b>RENT: 50,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "201", rentPerNight: "50000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room2.jpg' alt='room2' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 202
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed for couples and friends, our charming room features a luxurious
                                double bed and two comfortable sofas. Experience a serene retreat that
                                combines elegance and companionship, providing the perfect setting for
                                memorable moments and relaxation.
                                <br /><b>2 Persons</b><br /><b>RENT: 25,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "202", rentPerNight: "25000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room3.jpg' alt='room3' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 203
                            </MDBCardTitle>
                            <MDBCardText>
                                Tailored for families and friends, our spacious room offers a lavish
                                king-size bed and two inviting sofas. Experience the perfect blend
                                of comfort and togetherness, creating lasting memories in a setting
                                designed for relaxation and bonding.
                                <br /><b>4 Persons</b><br /><b>RENT: 40,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "203", rentPerNight: "40000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='cards-div'>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room4.jpg' alt='room4' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 204
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed to accommodate families, couples, and friends, our expansive
                                room features two king-size beds and four comfortable sofas. Create
                                cherished moments in a versatile space that effortlessly combines comfort
                                and togetherness, ensuring an unforgettable stay.
                                <br /><b>4 Persons</b><br /><b>RENT: 50,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "204", rentPerNight: "50000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room5.jpg' alt='room5' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 205
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed for couples and friends, our charming room features a luxurious
                                double bed and two comfortable sofas. Experience a serene retreat that
                                combines elegance and companionship, providing the perfect setting for
                                memorable moments and relaxation.
                                <br /><b>2 Persons</b><br /><b>RENT: 25,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "205", rentPerNight: "25000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room6.jpg' alt='room6' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 206
                            </MDBCardTitle>
                            <MDBCardText>
                                Tailored for families and friends, our spacious room offers a lavish
                                king-size bed and two inviting sofas. Experience the perfect blend
                                of comfort and togetherness, creating lasting memories in a setting
                                designed for relaxation and bonding.
                                <br /><b>3 Persons</b><br /><b>RENT: 40,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "206", rentPerNight: "40000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>
            
            <div className='cards-div'>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room7.jpeg' alt='room7' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 207
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed to accommodate families, couples, and friends, our expansive
                                room features two king-size beds and four comfortable sofas. Create
                                cherished moments in a versatile space that effortlessly combines comfort
                                and togetherness, ensuring an unforgettable stay.
                                <br /><b>2 Persons</b><br /><b>RENT: 50,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "207", rentPerNight: "50000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room8.jpeg' alt='room8' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 208
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed for couples and friends, our charming room features a luxurious
                                double bed and two comfortable sofas. Experience a serene retreat that
                                combines elegance and companionship, providing the perfect setting for
                                memorable moments and relaxation.
                                <br /><b>2 Persons</b><br /><b>RENT: 25,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "208", rentPerNight: "25000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='room9.jpeg' alt='room9' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room 209
                            </MDBCardTitle>
                            <MDBCardText>
                                Tailored for families and friends, our spacious room offers a lavish
                                king-size bed and two inviting sofas. Experience the perfect blend
                                of comfort and togetherness, creating lasting memories in a setting
                                designed for relaxation and bonding.
                                <br /><b>3 Persons</b><br /><b>RENT: 40,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "209", rentPerNight: "40000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
        <hr className='line'/>
        <h2 className='GDh2' id='daimond'>Daimond Floor</h2>
        <hr className='line'/>
        <div className='rooms-img'>
            <div className='cards-div'>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='D1.jpeg' alt='D1' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room: 301
                            </MDBCardTitle>
                            <MDBCardText>
                                This spacious room is designed to accommodate families, featuring
                                a comfortable arrangement with one double bed and two single beds.
                                Whether you're traveling with loved ones or friends, our family room
                                provides ample space and comfort for a relaxing stay.
                                <br /><b>2 Persons</b><br /><b>RENT: 50,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "301", rentPerNight: "50000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='D2.jpeg' alt='D2' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room: 302
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed for couples and friends, our charming room features a luxurious
                                double bed and two comfortable sofas. Experience a serene retreat that
                                combines elegance and companionship, providing the perfect setting for
                                memorable moments and relaxation.
                                <br /><b>2 Persons</b><br /><b>RENT: 25,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "302", rentPerNight: "25000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='D3.jpeg' alt='D3' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room: 303
                            </MDBCardTitle>
                            <MDBCardText>
                                Tailored for families and friends, our spacious room offers a lavish
                                king-size bed and two inviting sofas. Experience the perfect blend
                                of comfort and togetherness, creating lasting memories in a setting
                                designed for relaxation and bonding.
                                <br /><b>2 Persons</b><br /><b>RENT: 40,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "303", rentPerNight: "40000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='cards-div'>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='D4.jpg' alt='D4' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room: 304
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed to accommodate families, couples, and friends, our expansive
                                room features two king-size beds and four comfortable sofas. Create
                                cherished moments in a versatile space that effortlessly combines comfort
                                and togetherness, ensuring an unforgettable stay.
                                <br /><b>2 Persons</b><br /><b>RENT: 50,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "304", rentPerNight: "50000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='D5.jpeg' alt='D5' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room: 305
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed for couples and friends, our charming room features a luxurious
                                double bed and two comfortable sofas. Experience a serene retreat that
                                combines elegance and companionship, providing the perfect setting for
                                memorable moments and relaxation.
                                <br /><b>2 Persons</b><br /><b>RENT: 25,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "305", rentPerNight: "25000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='D6.jpeg' alt='D6' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room: 306
                            </MDBCardTitle>
                            <MDBCardText>
                                Tailored for families and friends, our spacious room offers a lavish
                                king-size bed and two inviting sofas. Experience the perfect blend
                                of comfort and togetherness, creating lasting memories in a setting
                                designed for relaxation and bonding.
                                <br /><b>2 Persons</b><br /><b>RENT: 40,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "306", rentPerNight: "40000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>
            
            <div className='cards-div'>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='D7.jpeg' alt='D7' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room: 307
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed to accommodate families, couples, and friends, our expansive
                                room features two king-size beds and four comfortable sofas. Create
                                cherished moments in a versatile space that effortlessly combines comfort
                                and togetherness, ensuring an unforgettable stay.
                                <br /><b>2 Persons</b><br /><b>RENT: 50,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "307", rentPerNight: "50000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='D8.jpeg' alt='D8' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room: 308
                            </MDBCardTitle>
                            <MDBCardText>
                                Designed for couples and friends, our charming room features a luxurious
                                double bed and two comfortable sofas. Experience a serene retreat that
                                combines elegance and companionship, providing the perfect setting for
                                memorable moments and relaxation.
                                <br /><b>2 Persons</b><br /><b>RENT: 25,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "308", rentPerNight: "25000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='room-cards'>
                    <MDBCardImage className='rooms-imgs' src='D9.jpeg' alt='D9' />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Room: 309
                            </MDBCardTitle>
                            <MDBCardText>
                                Tailored for families and friends, our spacious room offers a lavish
                                king-size bed and two inviting sofas. Experience the perfect blend
                                of comfort and togetherness, creating lasting memories in a setting
                                designed for relaxation and bonding.
                                <br /><b>2 Persons</b><br /><b>RENT: 40,000 per 24 hrs</b>
                            </MDBCardText>
                            <Link to={{pathname: "bookingform", state: { roomNumber: "309", rentPerNight: "40000", },}}><MDBBtn className='card-buttons' >Book Now</MDBBtn></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
