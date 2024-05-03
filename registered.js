const mongoose = require('mongoose');
const registeredSchema= mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    address:String,
    phone:Number,
    email:String
});

module.exports= mongoose.model("registereds",registeredSchema);