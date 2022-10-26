const express = require("express");
const router = express.Router();
const Mese = require("./Schema")

  ////////////////////////////////////////////
 ////////////////////////////////////////////
////////////////////////////////////////////

require('dotenv').config();
var mongoose = require('mongoose')
const client = mongoose.connect(process.env.MONGODB_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => { console.log('Database connection works');
})
    .catch((err) => console.log("Not Connected"));
    
module.exports = client;

  ////////////////////////////////////////////
 ////////////////////////////////////////////
////////////////////////////////////////////

    router.post('/message', async (req, res) => {
        try {
            const user = req.user
            const mese = req.body
            const newMessage = new Mese({                                                                    
               userId1: user,
               userId2: "",
               message: mese, 
               time: Date.now()   
            });
    
           
            await newMessage.save()
    
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    
    })