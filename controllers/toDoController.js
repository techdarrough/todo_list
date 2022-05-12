const router = require('express').Router()
const db = require('../models')
const { todo_list } = db
const { Op } = require('sequelize');


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

// Find one

router.get("/:todo_name", async (req, res) => {
    try {
        const foundSimilarTodos = await todo_list.findOne({
            order: [ [ 'todo_id', 'ASC' ] ],
            where: {
                todo_name: { [Op.like]: `%${req.query.todo_name ? req.query.todo_name : ''}%`  }
            }
        })
        res.status(200).json(foundSimilarTodos)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})
//Create todo
router.post("/", async (req, res) => {
    try { 
        const createTodo = await todo_list.create(req.body)
        res.status(200).json({
            message: 'Record added to table todo_list.todo',
            data: createTodo
        })

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
//Update Todo
router.put("/:todo_name", async (req, res) => {
    try{
        const updateTodo = await todo_list.update(req.body, {
            where: { 
                todo_name: req.params.todo_name
            }
        })
        res.status(200).json(`Succefully updated ${updateTodo} todos`)

    } catch (err) { 
        console.log(err)
        res.status(500).json(err)
    }
})
//Delete todo
router.delete('/:todo_id', async (req, res) => {
    try {
        const deletetoDo = await todo_list.destroy({
            where: {
                todo_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletetoDo} todo(s)`
        })
    } catch(err) {
        console.log(`There was a renderig error ${err}`)
        res.status(500).json(err)
    }
})

//Delete all todos


module.exports = router
