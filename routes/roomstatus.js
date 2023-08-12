const express = require('express');
const router = express.Router();
const { connection } = require('../database/mirage_hotel');

router.put('/:roomNo', (req, res) => {
  const roomNo = req.params.roomNo;
  const { availability, bookingID } = req.body;

  connection.query(
    'UPDATE rooms SET availability = ?, bookingID = ? WHERE roomNo = ?',
    [availability, bookingID, roomNo],
    (err, result) => {
      if (err) {
        console.error('Error updating room availability:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ message: 'Room availability updated successfully' });
      }
    }
  );
});

module.exports = router;
