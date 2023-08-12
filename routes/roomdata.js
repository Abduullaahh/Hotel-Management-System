const express = require("express");
const router = express.Router();
const {connection} = require("../database/mirage_hotel");

router.post('/', (req, res) => {
    const { roomNo, bookingID, availability } = req.body;
    const userdata = {
        roomNo: roomNo,
        bookingID: bookingID,
        availability: availability,
    }
    connection.query('INSERT into rooms SET ?', userdata,(err, result)=>{
        if (err) throw err;
        else
        {
            console.log("Room store");
            res.redirect('https://mirage-hotel.netlify.app/managerooms');
        }
    })
});

module.exports = router;
