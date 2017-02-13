const express = require('express')
const router = express.Router()

const toDo = require('../models/todo')

// TODO. import express and create a Router, replace the methods below with routes e.g.
// router.post('/', function(req,res) => {
//  Todo.create(req.body, function (err, todo) {
//    res.json(todo)
//  }
// })
// RESTful routes from todosdb mongodb
router.get('/', function (req, res, next) {
  toDo.find({}, function (err, output) {
    if (err) {
      return next(err)
    }
    res.send(output)
    // res.render('index', {
    //   alltoDos: output
    // }) // relative to 'views folder'
  })
})

router.post('/', function (req, res, next) {
  toDo.create(req.body, function (err, output) {
    if (err) {
      return next(err)
    }
    res.send(output)
  })
})

router.get('/:id', function (req, res, next) {
  toDo.findById(req.params.id, function (err, output) {
    if (err) {
      return next(err)
    }
    res.send(output)
  })
})

// update route
router.put('/:id', function (req, res, next) {
  toDo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, output) {
    if (err) {
      return next(err)
    }

    res.send(output)
  })
})

// delete route
router.delete('/:id', function (req, res, next) {
  toDo.findByIdAndRemove(req.params.id, function (err, output) {
    if (err) {
      return next(err)
    }
    res.send({
      message: 'deleted document with id: ' + req.params.id
    })
  })
})

module.exports = router
