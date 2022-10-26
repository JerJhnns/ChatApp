const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    
    
    userId1: String,
    userId2: String,
    message: String,
    time: Date,

})

const Mese = mongoose.model('Mese' , MessageSchema);
module.exports = Mese;