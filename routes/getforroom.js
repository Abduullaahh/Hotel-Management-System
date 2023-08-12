const express = require("express");
const router = express.Router();
const { connection } = require("../database/mirage_hotel");

router.get('/:bookingId', (req, response) => {
    const bookingId = req.params.bookingId;

    connection.query('SELECT * FROM userbookdata WHERE id = ?', [bookingId], (err, res) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            response.status(500).send('Internal Server Error');
        } else {
            if (res.length === 0) {
                response.status(404).send('Booking not found');
            } else {
                response.send(res[0]);
                console.log('Booking Data Read');
            }
        }
    });
});

module.exports = router;