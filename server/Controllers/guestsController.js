const express = require('express')
const app = express.Router()
const model = require('../Models/guestsModel')

app.get('/guests', (req, res) => {
  model.getGuests()
    .then(result => res.json(result.rows))
    .catch(err => res.json(err))
})

app.get('/guests/:firstname', (req, res) => {
  const {firstname} = req.params
  model.getGuestByFirstname(firstname)
    .then(result => {
      res.json(result.rows)
    })
    .catch(err => res.json(err))
})

app.get('/guests/:lastname/:firstname', (req, res) => {
  const {firstname, lastname} = req.params
  console.log('param', req.params)
  model.getGuestByFirstnameAndLastname({firstname, lastname})
    .then(result => {
      console.log('res', result.rows)
      res.json(result.rows)
    })
    .catch(err => res.json(err))
})

app.put('/guests/', (req, res) => {
  if (req.body.formData) {
    console.log('req.body.formData first', req.body.formData)
    const {firstname, lastname, email, phone, address} = req.body.formData
    model.addGuestData({firstname, lastname, email, phone, address})
      .then(() => {
        model.getGuestByFirstname(firstname)
          .then(result => {
            console.log('res addGuestData getGuestByFirstname', result.rows)
            res.json(result.rows)
          })
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  } else {
    console.log('req.body.resposne sec', req.body.response)
    const {firstname, lastname, alone, coming, brunch, hasChildren, loverFirstname, children, song} = req.body.response
    model.addGuestResponse({firstname, lastname, alone, brunch, coming, hasChildren, loverFirstname, children, song})
      .then(() => {
        model.getGuestByFirstnameAndLastname(firstname, lastname)
          .then(result => {
            console.log('res addGuestResponse getGuestByFirstnameAndLastname', result.rows)
            res.json(result.rows)
          })
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  }
})

module.exports = app
