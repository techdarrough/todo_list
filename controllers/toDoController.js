const router = require('express').Router()
const db = require('../models')
const { todo_list } = db
const { Op } = require('sequelize');
const res = require('express/lib/response');

// Find all todo items 

router.get("/", async (req, res)=>{
    try{
        const foundTodDos = await todo_list.findAll();
        res.status(200).json(foundTodDos);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    
    }

});

// Find specific todo


//Create todo

//Update Todo

//Delete todo

module.exports = router
