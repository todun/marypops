const db = require('./db.js')

module.exports = {

  getGuests () {
    return db.query('SELECT * FROM public."Guests"')
  },

  getGuestByFirstname (firstname) {
    return db.query(`SELECT * FROM public."Guests" WHERE firstname='${firstname}'`)
  }
}
