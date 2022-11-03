const express = require("express");
const router = express.Router();

const Users = require('../models/user');

//TIM THEO ID VA TRA VE THONG TIN CAN HIEN THI
router.get("/showuser/:id", async (req, res) => {
    await Users.findById(req.params.id)
        .then(user => {
            const userinfo = new Users({
                UserImage: user.UserImage,
            })
            
            res.json(userinfo);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//THEM USER IMAGE
router.post("/changeuserimage/:id", async (req, res)  => {
    await Users.findById(req.params.id)
        .then(user => {
            user.UserImage = req.body.UserImage;

            user
                .save()
                .then(() => res.json("Your Image has been Updated Successfully"))
                .catch(err => res.status(400).json(`Err: ${err}`))
        })
        .catch(err => res.status(400).json(`Err: ${err}`))
});

module.exports = router;