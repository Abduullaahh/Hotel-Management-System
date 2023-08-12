const express = require('express');
const router = express.Router();
const {transporter} = require("../nodemailer/nodemailer");
const { connection } = require('../database/mirage_hotel');

router.delete('/:bookingId', (req, res) => {
    const bookingId = req.params.bookingId;
    const gmail = req.body.gmail;
    var mailOption = '';
    mailOption = 
    {
        from: 'Mirage Hotel <hafizabdullahtahir@gmail.com>',
        to: gmail,
        subject: "Room Booking at Mirage Hotel",
        html: '<p>Dear Customer,</p><p>We are sorry to reject your request as we dont have free rooms available according to your requirements. Note that no deductions were made from your account</p><p>Best regards,<br>Mirage Hotel<br>03444262980</p>',
    }

  connection.query(
    `DELETE FROM userbookdata WHERE id = ?`,
    [bookingId],
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
        res.json({ message: 'Rejected deleted successfully' });
        console.log('Rejected Deleted')
      }
    }
  );
});

module.exports = router;