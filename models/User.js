const mongoose = require('mongoose');

// schema
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type: String,
        default: ""
    }
},{timestamps:true})

//module exports
module.exports = mongoose.model("Users",userSchema);