const mongoose = require("mongoose");
// const bcrypt = require ("bcryptjs");

const userSchema= new mongoose.Schema({
    name : { type : "string" , require: true },
    email : {type : "string" , require : true , unique : true },
    password : {type : "string" , require : true},
    isAdmin : {
        type : Boolean,
        default : false ,
    },

},{timestamps:true}) 




module.exports =mongoose.model("user",userSchema);