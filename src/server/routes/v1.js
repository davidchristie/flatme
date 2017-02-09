const express = require('express')

const db = require('../database')

const router = express.Router()

router.get('/users/:id', (request, response) => {
  const id = request.params.id
  db.getUserById(id)
    .then(user => {
      response.json(user)
    })
    .catch(error => {
      response.status(500).send(error.message)
    })
})

router.post('/users', (request, response) => {
  db.addUser(request.body)
    .then(user => {
      response.json(user)
    })
    .catch(error => {
      response.status(500).send(error.message)
    })
})

router.get('*', (request, response) => response.status(404).send('API endpoint not found.'))

module.exports = router