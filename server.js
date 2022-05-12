const express = require('express');
const app = express();
const { Sequelize } =  require('sequelize');


//Config / Mid-ware
require('dotenv').config() // loads config file .enc
app.use(express.json()) //allows access to req.body
app.use(express.urlencoded({ extended: false })) // parsing data sent to server via put or post

app.get('/', (req, res)=>{
    res.status(200).json({
        message: "welcome to todolist back end setup"
    })
});

//controller
const toDoController = require('./controllers/toDoController')
app.use ('/todos', toDoController)



app.get('*', (req, res) => res.status(404).send({
    message: 'Nothing to see here'}))

//Listen 
const port = process.env.PORT
app.listen(port, (err) => {
err ? console.log(err) : console.log(`App Listening on port ${port}`)
})