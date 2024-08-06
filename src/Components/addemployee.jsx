import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';

export default function AddEmployees() {
  return (
    <div className='addemp-main'>
        <div>
          <Sidebar/>
        </div>
        <div className="addemp-form">
          <h2>Add Employee</h2>
          <form action="https://obsidian-spotted-jingle.glitch.me/empdata" method="post">
            <div className="addemp-form-group">
              <input
                placeholder='Name'
                type="text"
                id="name"
                name="name"
              />
              <input
                placeholder='Designation'
                type="text"
                id="designation"
                name="designation"
              />
              <input
                placeholder='CNIC'
                type="cnic"
                id="cnic"
                name="cnic"
              />
              <input
                placeholder='Contact'
                type="phone"
                id="contact"
                name="phone"
              />
              <input
                placeholder='Email'
                type="gmail"
                id="gmail"
                name="gmail"
              />
              <input
                placeholder='Salary'
                type="number"
                id="salary"
                name="pay"
              />
              <input
                placeholder='Address'
                type="text"
                id="address"
                name="address"
              />
            </div>
            <div className="addemp-button">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
    </div>
  );
}