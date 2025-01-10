const mongoose = require('mongoose');

// schema
const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    dec:{
        type:String,
        required:true
    },
    photo:{
        type: String,
        default: ""
    },
    username:{
        type:String,
        required:true,
    },
    category:{
        type:Array,
        required:false
    }
    
},{timestamps:true})


//model export
module.exports = mongoose.model("Posts",postSchema);