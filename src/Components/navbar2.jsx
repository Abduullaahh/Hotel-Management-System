import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar2()
{
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link className='logolink' to={'userportal'}><img style={{width:'90px', height:'90px'}} src="logo.jpg" alt="logo" /></Link>
        </div>
        <div className="navbar-buttons">
          <Link className='links' to={'userportal'}>Home</Link>
          <Link className='links' to={'rooms'}>Our Rooms</Link>
          <Link className='links' to={'contactus'}>Contact Us</Link>
          <Link className='links' to="signup_signin">Login</Link>
        </div>
      </nav>
    </div>
  )
}