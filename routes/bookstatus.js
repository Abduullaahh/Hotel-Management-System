const express = require('express');
const router = express.Router();
const {transporter} = require("../nodemailer/nodemailer");
const { connection } = require('../database/mirage_hotel');

router.put('/:bookingId', (req, res) => {
  const bookingId = req.params.bookingId;
  const gmail = req.body.gmail;
  const { status } = req.body;
  var mailOption = '';
  console.log('chk 1')
  console.log(gmail)
  
  mailOption = 
  {
      from: 'Mirage Hotel <hafizabdullahtahir@gmail.com>',
      to: gmail,
      subject: "Room Booking at Mirage Hotel",
      html: '<p>Dear Customer,</p><p>This a conformation email for your booking at mirage hotel. Your payment was deducted from your account. We are looking forward for your arrival.<p>Best regards,<br>Mirage Hotel<br>03444262980</p>',
  }

  console.log(status)
  connection.query(
    'UPDATE userbookdata SET status = ? WHERE id = ?',
    [status, bookingId],
    (err, result) => {
      if (err) {
        console.error('Error updating booking status:', err);
        res.status(500).send('Internal Server Error');
      } else {
            transporter.sendMail(mailOption, (error, info)=>
                {
                    if (error) throw error;
                    else {
                        console.log("Email Sent")
                    }
                }
            )
        res.json({ message: 'Booking status updated successfully' });
      }
    }
  );
});

module.exports = router;