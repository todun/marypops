const express = require('express')
const app = express.Router()
const model = require('../Models/guestsModel')

app.get('/guests', (req, res) => {
  model.getGuests()
    .then(result => res.json(result.rows))
    .catch(err => res.json(err))
})

app.get('/guests/songs', (req, res) => {
  model.getSongs()
    .then(result => res.json(result.rows))
    .catch(err => res.json(err))
})

app.get('/guests/:link/:firstname', (req, res) => {
  const {link, firstname} = req.params
  model.getGuestByFirstname({link, firstname})
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => res.json(err))
})

app.get('/guests/:link/:lastname/:firstname', (req, res) => {
  const {link, firstname, lastname} = req.params
  model.getGuestByFirstnameAndLastname({link, firstname, lastname})
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => res.json(err))
})

app.put('/guests/', (req, res) => {
  if (req.body.formData) {
    const {link, firstname, lastname, email, phone, address} = req.body.formData
    model.addGuestData({link, firstname, lastname, email, phone, address})
      .then(() => {
        model.getGuestByFirstnameAndLastname({link, firstname, lastname})
          .then(result => {
            res.json(result.rows)
          })
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  } else {
    const {link, firstname, lastname, email, phone, address, alone, coming, brunch, hasChildren, loverFirstname, children, song, fillForm} = req.body.response
    model.addGuestResponse({link, firstname, lastname, email, phone, address, alone, coming, brunch, hasChildren, loverFirstname, children, song, fillForm})
      .then(() => {
        model.getGuestByFirstnameAndLastname({link, firstname, lastname})
          .then(result => {
            res.json(result.rows)
          })
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  }
})

module.exports = app
