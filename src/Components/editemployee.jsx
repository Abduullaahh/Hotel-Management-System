import React, { useState } from 'react';
import Sidebar from './sidebar';

const EditEmployee = ({ employee, onSave }) => {
  const [name, setName] = useState(employee.name);
  const [designation, setDesignation] = useState(employee.designation);
  const [cnic, setCnic] = useState(employee.cnic);
  const [phone, setPhone] = useState(employee.phone);
  const [email, setEmail] = useState(employee.gmail);
  const [salary, setSalary] = useState(employee.pay);
  const [address, setAddress] = useState(employee.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      id: employee.id,
      name,
      designation,
      cnic,
      phone,
      email,
      salary,
      address,
    };
    onSave(updatedEmployee);
  };

  return (
    <div className='edit-emp-main'>
      <form className='edit-emp-form' onSubmit={handleSubmit}>
        <input className='edit-emp-labels' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input className='edit-emp-labels' type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        <input className='edit-emp-labels' type="text" value={cnic} onChange={(e) => setCnic(e.target.value)} />
        <input className='edit-emp-labels' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input className='edit-emp-labels' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='edit-emp-labels' type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        <input className='edit-emp-labels' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditEmployee;