const express = require("express");
const router = express.Router();
const {connection} = require("../database/mirage_hotel");

router.post('/', (req, res) => {
    const name = req.body.name;
    const CNIC = req.body.cnic;
    const gmail = req.body.gmail;
    const phone = req.body.phone;
    const address = req.body.address;
    const pay = req.body.pay;
    const designation = req.body.designation;
    const userdata = {
        name: name,
        cnic: CNIC,
        gmail: gmail,
        phone: phone,
        address: address,
        pay: pay,
        designation: designation,
    }
    connection.query('INSERT into employees SET ?', userdata,(err, result)=>{
        if (err) throw err;
        else
        {
            console.log("Employee data store");
            res.redirect('https://mirage-hotel.netlify.app/manageemployee');
        }
    })
});

module.exports = router;
