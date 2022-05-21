const express = require('express');
const app = express();
const cors = require("cors");
const { Sequelize } =  require('sequelize');


//Config / Mid-ware
require('dotenv').config() // loads config file .enc
app.use(cors()); // prevent cors errors
app.use(express.json()) //allows access to req.body
app.use(express.urlencoded({ extended: false })) // parsing data sent to server via put or post

// cors proxy - insert response into all headers to allow for cors
// !!!!!! SWITCHED to cors as delete would fail on cors error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (req, res)=>{
    res.status(200).json({
        message: "welcome to todolist back end setup"
    })
});

//controllers
const toDoController = require('./controllers/toDoController')
app.use ('/todos', toDoController)



app.get('*', (req, res) => res.status(404).send({
    message: 'Nothing to see here'}))

//Listen 
const port = process.env.PORT
app.listen(port, (err) => {
err ? console.log(err) : console.log(`App Listening on port ${port}`)
})