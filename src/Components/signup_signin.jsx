import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

export default function Signin_Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    if (username === 'admin' && password === 'admin123') {
      window.location.href = '/dashboard';
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className='main-div'>
      <div>
      <nav className="navbar">
        <div className="navbar-logo">
            <img style={{width:'90px', height:'90px'}} src="logo.png" alt="logo" />
        </div>
        <div className="navbar-buttons">
          <Link className='links' to='userportal'>Home</Link>
        </div>
      </nav>
      </div>
      <div id="signinForm">
        <div className="form-container">
          <div>
            <h2 style={{color: 'black'}}>Admin Login</h2>
            <input
              className='sui-input'
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input
              className='sui-input'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button className='sui-button' onClick={handleSignin}>Signin</button>
          </div>
          <div className='logo-signin'>
            <img src="logo.png" alt="mirage hotel" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}