const express = require("express");
const router = express.Router();
const {connection} = require("../database/mirage_hotel");

router.get('/', (req, response) => {
    connection.query('SELECT * FROM rooms', (err, res) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            response.status(500).send('Internal Server Error');
        } else {
            response.send(res);
            console.log('Data Read')
        }
    });
});

module.exports = router;