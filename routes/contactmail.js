const express = require("express");
const router = express.Router();
const {transporter} = require("../nodemailer/nodemailer");

router.post('/', (req, res) => {
    const name = req.body.Name;
    const email = req.body.Email;
    const phone = req.body.Phone;
    const message = req.body.Message;
    const mailOption = {
        from: `"${name}" <${email}>`,
        to: 'hafizabdullahtahir@gmail.com',
        subject: "Costumer Contact",
        html: `
            <p>Hello Mirage Hotel Team,</p>
            <p>You have received a new room booking request from:</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone}</li>
            </ul>
            <p>Message: ${message}</p>
        `,
    };
    
    transporter.sendMail(mailOption, (error, info)=>
        {
            if (error) throw error;
            else {
                console.log("Email Sent")
            }
        }
    )
});

module.exports = router;
