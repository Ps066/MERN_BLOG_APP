// all imports 
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./utils/cloudinary');

//route imports
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const categoryRoutes = require('./routes/category');

// all configs
const app = express();
dotenv.config();
app.use(express.json());

// public the images folder
app.use('/images',express.static(path.join(__dirname,"/images")))

// variables from the .env file
const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URL;

//mongodb connection code
mongoose.connect(MONGO).then(()=>{
    console.log("Mongo DB is connected");
}).catch((err)=>{
    console.log(err);
})

// image upload (using multer storage)
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"images");
    },
    filename: (req,file,cb)=>{
        cb(null, req.body.name);     // we are trying to feed our own created FormData here with name params 
    }
})

// image uplaod to cloudinary storage 
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: "blog_app_uploads",  // Change folder name as needed
//         allowed_formats: ['jpg', 'jpeg', 'png', 'gif']
//     }
// })

const uplaod = multer({storage:storage});
app.post("/api/upload", uplaod.single("file"), (req,res)=>{  // we will pass the file parameter from formdata here (transfering the file)
    try {
        res.status(200).json({ message: "Image uploaded successfully", url: req.file.path });
        
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
