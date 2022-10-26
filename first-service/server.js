/* Them Route - Logic */

const loginRouter = require("./routes/loginroute");

/* Them thu vien */
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

/* set up service */
const app = express(); //express
const port = 4000; 

app.use(cors()); //cors
app.use(express.json()); // express type, su dung json de thuc hien nhan/gui request

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () => 
    console.log("MongoAtles connection successfully!!")
);


/* Xu ly logic */
app.use("/user", loginRouter);
/// url localhost:4000/user/login


/* port cua web service */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})