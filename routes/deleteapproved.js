const express = require('express');
const router = express.Router();
const { connection } = require('../database/mirage_hotel');

router.delete('/:bookingId', (req, res) => {
  const bookingId = req.params.bookingId;

  connection.query(
    `DELETE FROM userbookdata WHERE id = ?`,
    [bookingId],
    (err, result) => {
      if (err) {
        console.error('Error updating booking status:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ message: 'Approved deleted successfully' });
      }
    }
  );
});

module.exports = router;