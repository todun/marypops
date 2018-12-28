const express = require('express')
const app = express.Router()
const model = require('../Models/tokenModel')

// app.get('/', (req, res) => {
//   model.getToken()
//     .then(result => {
//       res.json(result.rows)
//     })
//     .catch(err => res.json(err))
// })

app.post('/', (req, res) => {
  const {token} = req.body
  model.getToken()
    .then(result => {
      if (token === result.rows[0].token) {
        return res.json(result.rows)
      }
      return ''
    })
    .catch(err => res.json(err))
})

module.exports = app
