const express = require('express')
const app = express.Router()
const model = require('../Models/guestsModel')

app.get('/', (req, res) => {
  model.getGuests()
    .then(result => res.json(result.rows))
    .catch(err => res.json(err))
})

app.get('/:firstname', (req, res) => {
  const {firstname} = req.params
  model.getGuestByFirstname(firstname)
    .then(result => {
      res.json(result.rows)
    })
    .catch(err => res.json(err))
})

app.get('/:lastname/:firstname', (req, res) => {
  const {firstname, lastname} = req.params
  console.log('param', req.params)
  model.getGuestByFirstnameAndLastname({firstname, lastname})
    .then(result => {
      console.log('res', result.rows)
      res.json(result.rows)
    })
    .catch(err => res.json(err))
})

app.put('/', (req, res) => {
  const {firstname, lastname, email, phone, address} = req.body.formData
  model.addGuestData({firstname, lastname, email, phone, address})
    .then(() => {
      model.getGuestByFirstname(firstname)
        .then(result => {
          res.json(result.rows)
        })
        .catch(err => res.json(err))
    })
    .catch(err => res.json(err))
})

module.exports = app
