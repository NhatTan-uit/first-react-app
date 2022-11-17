const express = require("express");
const router = express.Router();

const Books = require('../models/book');


//TEST REQUEST 
//REQUEST GET ALL USERS FOR ADMIN
router.get("/all", (req, res) => {
    Books.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`))
});


module.exports = router;