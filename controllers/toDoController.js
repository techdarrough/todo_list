const router = require('express').Router()
const db = require('../models')
const { todo_list } = db
const { Op } = require('sequelize');
const res = require('express/lib/response');

// Find all todo items 

router.get('/', async (req, res)=>{
    try{
        const foundTodDos = await todo_list.findAll(
            {
                order:[ [ 'todo_id', 'ASC' ] ],
                where: {
                    name: { [Op.like]: `%${req.query.name ? req.query.name : ' '}%`  }
                }
            }
        )
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    
    }

});

// Find specific todo
router.get('/:name', async (req, res)=> {
    try{
        const foundTodoItem = await todo_list.findOne({
            where
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router
