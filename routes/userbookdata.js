const express = require("express");
const router = express.Router();
const {transporter} = require("../nodemailer/nodemailer");
const {connection} = require("../database/mirage_hotel");

router.post('/', (req, res) => {
    const name = req.body.name;
    const CNIC = req.body.cnic;
    const email = req.body.email;
    const phone = req.body.phone;
    const children = req.body.children;
    const adults = req.body.adults;
    const arrival = req.body.arrival;
    const departure = req.body.departure;
    const roomNumber = req.body.roomNumber;
    const rentPerNight = req.body.rentPerNight;
    var t_guest = req.body.adults + req.body.children;
    const mailOption = {
        from: 'Mirage Hotel <hafizabdullahtahir@gmail.com>',
        to: email,
        subject: "Room Booking at Mirage Hotel",
        html: `<p>Dear Customer,</p><p>We have received your request for room reservation. A confirmation mail will be sent after approval of your room reservation at Mirage Hotel.</p><h4>Booking Details:</h4><p><strong>Name:</strong> ${name}</p><p><strong>Check-in Date:</strong> ${arrival}</p><p><strong>Check-out Date:</strong> ${departure}</p><p><strong>Total Guests:</strong> ${t_guest}</p><br><p>Thank you for choosing Mirage Hotel for your upcoming stay. We look forward to providing you with exceptional service and a delightful experience. See you soon!</p><p>Best regards,<br>Mirage Hotel<br>03444262980</p>`,
    };
    
    
    
    const userdata = {
        name: name,
        cnic: CNIC,
        gmail: email,
        phone: phone,
        children: children,
        adults: adults,
        arrival: arrival,
        departure: departure,
        roomNumber: roomNumber,
        rentPerNight: rentPerNight,
    }
    connection.query('INSERT into userbookdata SET ?', userdata,(err, result)=>{
        if (err) throw err;
        else
        {
            console.log("data store");
            transporter.sendMail(mailOption, (error, info)=>
                {
                    if (error) throw error;
                    else {
                        console.log("Email Sent")
                    }
                }
            )
            res.redirect('http://localhost:3000');
        }
    })
});

module.exports = router;