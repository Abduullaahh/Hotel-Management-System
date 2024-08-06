import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import EditEmployee from './editemployee';
import { Link } from 'react-router-dom';

export default function ManageEmployees() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    fetch('https://obsidian-spotted-jingle.glitch.me/empdataget')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employee data:', error));
  }, []);

  const handleUpdateStatus = (id) => {
    fetch(`https://obsidian-spotted-jingle.glitch.me/empstatus/updateStatus/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Suspended' }),
    })
      .then(response => response.json())
      .then(data => {
        setEmployees(prevEmployees =>
          prevEmployees.map(emp => (emp.id === id ? { ...emp, status: 'Suspended' } : emp))
        );
      })
      .catch(error => console.error('Error updating employee status:', error));
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const handleSaveEmployee = (updatedEmployee) => {
    fetch(`https://obsidian-spotted-jingle.glitch.me/empstatus/updateEmployee/${updatedEmployee.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployee),
    })
      .then(response => response.json())
      .then(data => {
        setEmployees(prevEmployees =>
          prevEmployees.map(emp => (emp.id === updatedEmployee.id ? { ...emp, ...updatedEmployee } : emp))
        );
        setEditingEmployee(null);
      })
      .catch(error => console.error('Error updating employee:', error));
  };

  return (
    <div className='epmloyee-main'>
      <div>
        <Sidebar/>
      </div>
      <div className="manage-employees">
        <div className="button-group1">
          <h2>Manage Employees</h2>
          <Link to='addemployee'><button>Add Employee</button></Link>
        </div>
        <div className="employee-list">
          {employees.map(employee => (
            <React.Fragment key={employee.id}>
              {employee.status === 'Working' && (
                <>
                  {editingEmployee && editingEmployee.id === employee.id ? (
                    <EditEmployee employee={editingEmployee} onSave={handleSaveEmployee} />
                  ) : (
                    <div className="employee-card">
                      <h3 style={{textAlign: 'center'}}>{employee.name}</h3>
                      <hr className="line" />
                      <p>Designation: {employee.designation}</p>
                      <p>CNIC: {employee.cnic}</p>
                      <p>Contact: {employee.phone}</p>
                      <p>Email: {employee.gmail}</p>
                      <p>Salary: ${employee.pay}</p>
                      <p>Address: {employee.address}</p>
                      <div className="button-group">
                        <button className='sus' onClick={() => handleUpdateStatus(employee.id)}>
                          Suspend
                        </button>
                        <button className='edit' onClick={() => handleEditEmployee(employee)}>
                          Edit
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}