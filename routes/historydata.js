const express = require("express");
const router = express.Router();
const { connection } = require("../database/mirage_hotel");

router.post('/', (req, res) => {
  const { roomnum, bookingId, name, cnic, phone, arrival, departure, persons, bill } = req.body;

  const bookingInfo = {
    name: name,
    cnic: cnic,
    phone: phone,
    roomnum: roomnum,
    arrival: arrival,
    departure: departure,
    bookingId: bookingId,
    persons: persons,
    bill: bill,
  };

  connection.query('INSERT into history SET ?', bookingInfo, (err, result) => {
    if (err) {
      console.error('Error storing booking information:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Booking information stored:', bookingInfo);
      res.json({ message: 'Booking information stored successfully' });
    }
  });
});

module.exports = router;