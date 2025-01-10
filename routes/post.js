const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Posts');

//create posts
router.post('/', async (req,res)=>{
    try {
        const newPost = new Post(req.body);
        const savedPost= await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    } 
});



// create post with username 
// router.post('/', async (req,res)=>{
//     try {
//         const user = await User.findOne({username: req.body.username})
//         if(user){
//             const newPost = new Post(req.body);
//             const savedPost= await newPost.save();
//             res.status(200).json("post created!");
//         }else{
//             res.status(400).json("can't create post, no such user exists!")
//         }
//     } catch (error) {
//         res.status("200").json(error);
//     } 
// });


// update post 
router.put('/:id', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                    {
                        new:true
                    }
                )
                res.status(200).json(updatedPost);
            }catch(error){
                res.status(500).json(error);
            }
        }else{
            res.status(401).json("You can only update your own posts!!")
        }
    }catch(err){
        res.status(500).json(err);
    }
})


//delete post 
router.delete('/:id', async (req,res)=>{
    try{
        const posts = await Post.findById(req.params.id);
        if(posts.username === req.body.username){
            try{
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).json("Post has been deteled");
            }catch(error){
                res.status(500).json(error);
            }
        }else{
            res.status(401).json("You can only delete your own posts!!")
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//get post 
router.get('/:id', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(error){
        res.status(500).json(error);
    }

})

// fetch all post by user name , category 

router.get('/', async (req,res)=>{
    const userName =  req.query.user;
    const catName = req.query.category;
    try {
        let posts;
        if(userName){
            posts = await Post.find({username : userName})
        }else if(catName){
            posts = await Post.find({category: {$in: [catName]}});
        }else{
            posts = await Post.find();
        }

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }
})

// export routes 
module.exports = router;