const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name : {type : String, required : true},
    image : {type : String, required : true},
    date : {type : String, required : true},
    type : {type : String, required : true},
    price : {type : Number, required : true},
    info : {type : String, required : true},
    created : {type : Date, required : Date.now}
});

const NewEvent = mongoose.model('user', EventSchema);
module.exports = NewEvent;