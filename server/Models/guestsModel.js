const db = require('./db.js')

module.exports = {

  getGuests() {
    console.log('all');
    return db.query('SELECT * FROM public."Guests"')
  },

  getGuestByFirstname(firstname) {
    console.log('firstname');
    return db.query(`SELECT * FROM public."Guests" WHERE firstname='${firstname}'`)
  },
}