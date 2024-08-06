import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

export default function About()
{
  return (
    <div>
      {/* Navbar */}
      <nav className="about" id='about'>
        <div className="about-us">
            <p className='text'>
                <h1>About Us</h1><br />
                Welcome to This Mirage Hotels - A Haven of Luxury and Hospitality.
                Nestled in the heart of captivating destinations, we redefine the
                art of comfortable living and impeccable service. With a legacy of
                excellence, our hotels blend modern elegance with cultural charm,
                offering a sanctuary where guests can unwind and create lasting
                memories. Our dedicated team, committed to exceeding expectations,
                ensures every stay is an extraordinary experience. Discover lavish
                accommodations, exquisite dining, and rejuvenating wellness amenities,
                all thoughtfully designed to inspire tranquility and elevate your
                journey. At This Mirage Hotels, we embody the essence of true hospitality,
                where every moment is a reflection of our genuine commitment to your delight.
            </p>
            <img className="about-image" src="about.png" alt="about" />
        </div>
      </nav>
    </div>
  )
}
