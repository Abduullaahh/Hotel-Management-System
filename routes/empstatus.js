const express = require('express');
const router = express.Router();
const { connection } = require('../database/mirage_hotel');

router.put('/updateEmployee/:employeeId', (req, res) => {
  const employeeId = req.params.employeeId;
  const { name, designation, cnic, phone, email, salary, address } = req.body;
  console.log('chk 1');
  connection.query(
    'UPDATE employees SET name = ?, designation = ?, cnic = ?, phone = ?, gmail = ?, pay = ?, address = ? WHERE id = ?',
    [name, designation, cnic, phone, email, salary, address, employeeId],
    (err, result) => {
      if (err) {
        console.error('Error updating employee:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ message: 'Employee updated successfully',  employee: req.body});
      }
    }
  );
  console.log('chk 2');
});

router.put('/updateStatus/:employeeId', (req, res) => {
  const employeeId = req.params.employeeId;
  const { status } = req.body;
  connection.query(
    'UPDATE employees SET status = ? WHERE id = ?',
    [status, employeeId],
    (err, result) => {
      if (err) {
        console.error('Error updating employee status:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ message: 'Employee status updated successfully' });
      }
    }
  );
});

module.exports = router;