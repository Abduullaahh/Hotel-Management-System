const express = require("express");
const router = express.Router();
const { connection } = require("../database/mirage_hotel");

router.delete('/:id', (req, res) => {
    const roomId = req.params.id;
    connection.query('DELETE FROM bookedrooms WHERE id = ?', roomId, (err, result) => {
        if (err) {
            console.error('Error deleting booked room entry:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json({ message: 'Booked room entry deleted successfully' });
            console.log("Booked deleted")
        }
    });
});

module.exports = router;