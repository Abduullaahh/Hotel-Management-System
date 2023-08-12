const express = require("express");
const router = express.Router();
const { connection } = require("../database/mirage_hotel");

router.post('/', (req, res) => {
  const { servant, sercontact, roomnum, floor, rent, capacity, bookingId, guestName, cnic, phone, arrival, departure, persons, bill } = req.body;

  const bookingInfo = {
    servant: servant,
    sercontact: sercontact,
    roomnum: roomnum,
    floor: floor,
    rent: rent,
    bookingId: bookingId,
    capacity: capacity,
    guestName: guestName,
    cnic: cnic,
    phone: phone,
    arrival: arrival,
    departure: departure,
    persons: persons,
    bill: bill,
  };

  connection.query('INSERT into bookedrooms SET ?', bookingInfo, (err, result) => {
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