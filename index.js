const express = require('express')
const path = require('path')
require('dotenv').config({ debug: process.env.DEBUG })
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', require('./server/index'))


app.use('/', express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("connected from index");
}).on("error", err => console.log("erreur de connexion : ", err));
  
