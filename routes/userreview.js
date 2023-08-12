const express = require("express");
const router = express.Router();
const {connection} = require("../database/mirage_hotel");

router.post('/', (req, res) => {
    const name = req.body.name;
    const review = req.body.review;
    const userdata = {
        name: name,
        review: review,
    }
    connection.query('INSERT into reviews SET ?', userdata,(err, result)=>{
        if (err) throw err;
        else
        {
            console.log("Review store");
            res.redirect('http://localhost:3000/userportal');
        }
    })
});

module.exports = router;