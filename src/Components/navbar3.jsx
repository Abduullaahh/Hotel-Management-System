import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar3()
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
          <a className='links' href="#ground">Ground Floor</a>
          <a className='links' href="#black">Blackwater Floor</a>
          <a className='links' href="#daimond">Daimond Floor</a>
          <Link className='links' to={'contactus'}>Contact Us</Link>
        </div>
      </nav>
    </div>
  )
}