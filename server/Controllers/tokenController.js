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
      console.log('result token', result)
      if (token === result.rows[0].token) {
        console.log('in if toekn')
        return res.json(result.rows)
      }
      return res.status(401).json({msg: 'bad token'})
    })
    .catch(err => {
      res.status(401).json({msg: 'bad token in err'})
      throw (err)
    })
})

module.exports = app
