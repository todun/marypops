const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


// Davido's code
// middleware to escape simple quotes
// I use simple quotes in SQL queries (cf. model)
app.use((req, res, next) => {
  req.body = Object.entries(req.body).reduce(( acc, [key, value] ) => {
    acc[key] = (typeof value === 'string') ? value.replace(/\'/g, '\'\'') : value
    return acc
  }, {})
  next();
})

// Routes et Controller :
app.get('/', (req, res) => {
  res.send('coucou')
})

app.use('/guests', require('./Controllers/guestsController'))

app.listen(3000, err => {
  if(err) {
    console.log('No connexion');
  }
  console.log('Connexion good on port 3000!');
})