import React from 'react';
import Navbar2 from './navbar2';
import Footer from './footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faLinkedinIn,
//     faFacebookF,
//     faInstagram,
//     faGithub,
//     faTwitter,
// } from '@fortawesome/free-brands-svg-icons';

export default function ContactForm() {
    return (
      <div>
        <Navbar2/>
        <div className="contact_form" id='contact'>
          <form id="request" className="row" action="https://obsidian-spotted-jingle.glitch.me/contactmail" method="post">
              <h1 className='head_con'>Contact Us</h1>
              <div className="col-md-12">
                <input className="contactus" placeholder="Name" type="text" name="Name"/>
              </div>
              <div className="col-md-12">
                <input className="contactus" placeholder="Email" type="text" name="Email"/>
              </div>
              <div className="col-md-12">
                <input className="contactus" placeholder="Phone Number" type="text" name="Phone"/>                        
              </div>
              <div className="col-md-12">
                <textarea className='con-textarea' placeholder="Message" name="Message" data-gramm="false" wt-ignore-input="true"></textarea>
              </div>
              <div className="col-md-12">
                <button className="send_btn"><b>Send</b></button>
              </div>
          </form>
          <div>
            <img className='image' src="logo.jpg" alt="logo" />
          </div>
          {/* <div className='befbef'>
              <div className= "beforelink"><a target="_blank" className='social-links-con' href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></div>
              <div className= "beforelink"><a target="_blank" className='social-links-con' href="http://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
              <div className= "beforelink"><a target="_blank" className='social-links-con' href="http://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></div>
              <div className= "beforelink"><a target="_blank" className='social-links-con' href="http://www.github.com"><FontAwesomeIcon icon={faGithub} /></a></div>
              <div className= "beforelink"><a target="_blank" className='social-links-con' href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></div>
          </div> */}
        </div>
        <Footer/>
      </div>
    );
}  