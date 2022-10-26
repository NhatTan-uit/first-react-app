const express = require("express");
const router = express.Router();

const Users = require('../models/user');


//TEST REQUEST 
//REQUEST GET ALL USERS FOR ADMIN
router.get("/test", (req, res) => {
    Users.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//REQUEST FOR LOGIN 
router.post("/login", async (req, res)  => {
    await Users.findOne({ TaiKhoan: req.body.TaiKhoan })
        .then(user => {
            if (user) {
                if (req.body.MatKhau === user.MatKhau) {
                    res.send({ message: "Login successfully", user: user });
                }
                else {
                    res.json("Wrong password");
                }
            }
            else {
                res.json("Not register");
            }
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});


module.exports = router;