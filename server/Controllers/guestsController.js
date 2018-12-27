const express = require('express')
const app = express.Router()
const db = require('../Models/db')
const model = require('../Models/guestsModel')

app.get('/', (req, res) => {
  model.getGuests()
    .then(result => res.json(result.rows))
    .catch(err => res.json(err))
});

app.get('/:firstname', (req, res) => {
  const {firstname} = req.params;
  model.getGuestByFirstname(firstname)
    .then(result => {
      res.json(result.rows)
    })
    .catch(err => res.json(err))
});

module.exports = app;