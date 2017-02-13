// TODO. include express and body-parser, plugin in the todos controller and start listening
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
// const port = 4000
// set our view engine to be ejs
app.set('view engine', 'ejs')

const mongoose = require('mongoose')
mongoose.connect('mongodb://john:myyenny@ds147799.mlab.com:47799/wdi')
// mongoose.connect('mongodb://localhost/todosdb')

mongoose.Promise = global.Promise

const bodyParser = require('body-parser')

const todosController = require('./controllers/todos_controller')
app.use(bodyParser.json()) // for parsing application /json

// startup api middleware, all req goes to /startups got ot controller
app.use('/todos', todosController)

app.use(function (err, req, res, next) {
  res.send({
    error: err.message
  })
})

app.listen(port, function () {
  console.log('middleware test is running on ' + port)
})
