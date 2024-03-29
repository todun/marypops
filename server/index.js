const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
  req.body = Object.entries(req.body).reduce((acc, [key, value]) => {
    // eslint-disable-next-line
    acc[key] = (typeof value === 'string') ? value.replace(/\'/g, '\'\'') : value
    return acc
  }, {})
  next()
})

// Routes et Controller :
app.get('/', (req, res) => {
  res.send('nothing to see')
})

app.use('/api', require('./Controllers/guestsController'))
app.use('/api', require('./Controllers/tokenController'))

// app.listen(3000, err => {
//   if (err) {
//     console.log('No connexion')
//   }
//   console.log('Connexion good on port 3000!')
// })

module.exports = app