require('dotenv').config({ debug: process.env.DEBUG })

const { Client } = require('pg')
// console.log('db', process.env.PGUSERNAME)
// const db = new Client({
//   user: process.env.PGUSERNAME,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT
// })

const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

db.connect((err) => {
  if (err) {
    return console.log(err)
  } else {
    console.log('db connected')
  }
})

// we transform the callbacks into promises
db.connectQuery = (query) => new Promise((resolve, reject) => {
  db.query(query, (err, result) => {
    err ? reject(err) : resolve(result)
  })
})

db.quoteEscape = (str) => str.replace('\'', '\'\'')

module.exports = db

