import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faLinkedinIn,
//     faFacebookF,
//     faInstagram,
//     faGithub,
//     faTwitter,
// } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='footer-main'>
            <div className='display'>
                <div className='footer'>
                    <div className="contact">
                        <h2 className='heads'><b>Contact Us</b></h2>
                        <i id='text' class="fa fa-map-marker" aria-hidden="true"></i>  Faisal Town, Lahore, Pakistan <br />
                        <i id='text' class="fa fa-mobile" aria-hidden="true"></i>  +923444262980 <br />
                        <i id='text' class="fa fa-envelope" aria-hidden="true"></i>  hafizabdullahtahir@gmail.com <br />
                    </div>
                    <div className="menu-links">
                        <h2 className='heads'><b>Menu Links</b></h2>
                        <Link className='links-menu' to={'userportal'}>Home</Link><br />
                        <Link className='links-menu' to={'rooms'}>Our Rooms</Link><br />
                        <Link className='links-menu' to={'contactus'}>Contact</Link><br />
                    </div>
                    <div className="social-media">
                        <h2 className='heads'><b>News Letter</b></h2>
                        <div style={{display: 'flex'}}>
                            <input className='email-news' type="email" placeholder="Email" />
                            <button className="subscribe-button">Subscribe</button><br />
                        </div>
                        {/* <a target="_blank" className='social-links' href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a target="_blank" className='social-links' href="http://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a target="_blank" className='social-links' href="http://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a target="_blank" className='social-links' href="http://www.github.com"><FontAwesomeIcon icon={faGithub} /></a>
                        <a target="_blank" className='social-links' href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a> */}
                    </div>
                </div>
                <p className='rights'>© 2023 All Rights Reserved. Credits Abdullah Tahir</p>
            </div>
        </footer>
    );
}  