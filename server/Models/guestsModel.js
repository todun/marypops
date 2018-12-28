const db = require('./db.js')

module.exports = {

  getGuests () {
    return db.query('SELECT * FROM public."Guests"')
  },

  getGuestByFirstname (firstname) {
    return db.query(`SELECT * FROM public."Guests" WHERE firstname='${firstname}'`)
  },

  getGuestByFirstnameAndLastname ({firstname, lastname}) {
    return db.query(`SELECT * FROM public."Guests" WHERE firstname='${firstname}' AND lastname='${lastname}'`)
  },

  addGuestData ({firstname, lastname, email, phone, address}) {
    return db.query(`UPDATE public."Guests" SET 
      email='${email}',
      phone='${phone}',
      address='${address}'
    WHERE firstname='${firstname}'
    AND lastname='${lastname}'`)
  }
}
