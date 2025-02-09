const mongoose = require('mongoose');

// schema
const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
    
},{timestamps:true})


//model export
module.exports = mongoose.model("Categories",categorySchema);