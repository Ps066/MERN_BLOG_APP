const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// create category 
router.post('/', async (req,res)=>{
    try {
        const cat = new Category(req.body);
        const savedCat = cat.save();
        res.status(200).json(cat);
    } catch (error) {
        res.status(500).json(error)
    }
})


//get all category
router.get('/', async (req,res)=>{
    try {
        const cat = await Category.find();
        res.status(200).json(cat);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;