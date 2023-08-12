const express = require("express");
const router = express.Router();
const {connection} = require("../database/mirage_hotel");

router.get('/:roomNumber', (req, response) => {
    const roomNo = req.params.roomNumber;
    console.log(roomNo);
    connection.query(`SELECT * FROM history WHERE roomnum = ${roomNo}`, (err, res) => {
        [roomNo]
        if (err) {
            console.error('Error executing SQL query:', err);
            response.status(500).send('Internal Server Error');
        } else {
            response.send(res);
            console.log('Read History');
        }
    });
});

module.exports = router;