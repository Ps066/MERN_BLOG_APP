// all imports 
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');

//route imports
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const categoryRoutes = require('./routes/category');

// all configs
const app = express();
dotenv.config();
app.use(express.json());

// variables from the .env file
const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URL;

//mongodb connection code
mongoose.connect(MONGO).then(()=>{
    console.log("Mongo DB is connected");
}).catch((err)=>{
    console.log(err);
})

// image upload 
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"images");
    },
    filename: (req,file,cb)=>{
        cb(null, req.body.name);
    }
})

const uplaod = multer({storage:storage});
app.post("/api/upload", uplaod.single("file"), (req,res)=>{
    try {
        res.status(200).json("Image uploaded");
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//all routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post',postRoutes);
app.use('/api/category',categoryRoutes);

// Server Code
app.listen(PORT, ()=>{
    console.log(`Server is running on the ${PORT} port`);
})
