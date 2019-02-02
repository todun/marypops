const express = require('express')
const app = express.Router()
const model = require('../Models/guestsModel')

app.get('/guests', (req, res) => {
  model.getGuests()
    .then(result => res.json(result.rows))
    .catch(err => res.json(err))
})

app.get('/guests/:link/:firstname', (req, res) => {
  const {link, firstname} = req.params
  console.log('link controller', req.params)
  model.getGuestByFirstname({link, firstname})
    .then(result => {
      console.log(result.rows)
      return res.json(result.rows)
    })
    .catch(err => res.json(err))
})

app.get('/guests/:link/:lastname/:firstname', (req, res) => {
  const {link, firstname, lastname} = req.params
  console.log('param', req.params)
  model.getGuestByFirstnameAndLastname({link, firstname, lastname})
    .then(result => {
      console.log('res', result.rows)
      return res.json(result.rows)
    })
    .catch(err => res.json(err))
})

app.put('/guests/', (req, res) => {
  if (req.body.formData) {
    console.log('req.body.formData first', req.body.formData)
    const {link, firstname, lastname, email, phone, address} = req.body.formData
    model.addGuestData({link, firstname, lastname, email, phone, address})
      .then(() => {
        console.log('before getGuestByFirstname')
        model.getGuestByFirstname({link, firstname})
          .then(result => {
            console.log('res addGuestData getGuestByFirstname', result.rows)
            res.json(result.rows)
          })
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  } else {
    console.log('req.body.resposne sec', req.body.response)
    const {link, firstname, lastname, alone, coming, brunch, hasChildren, loverFirstname, children, song,fill_form} = req.body.response
    model.addGuestResponse({link, firstname, lastname, alone, brunch, coming, hasChildren, loverFirstname, children, song, fill_form})
      .then(() => {
        model.getGuestByFirstnameAndLastname({link, firstname, lastname})
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
