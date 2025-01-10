const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Posts')
const bcrypt = require('bcrypt');


//update user
router.put('/:id', async (req,res)=>{
    if(req.body.userID === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            },{new:true});

            res.status(200).json(updatedUser);

        }catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(401).json("You can only update you account!");
    }
})



//delete user
router.delete('/:id', async (req,res)=>{
    if(req.body.userID === req.params.id){
        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("user has been deleted!");
            }catch(error){
                res.status(500).json(error);
            }
        }catch(error){
            res.status(500).json(error);
        }


        
    }else{
        res.status(401).json("You can only delete you account!");
    }
})


//get user
router.get('/:id', async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password , ...other} = user._doc;

        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;