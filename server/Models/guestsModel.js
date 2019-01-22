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
  },

  addGuestResponse ({firstname, lastname, alone, brunch, coming, hasChildren, loverFirstname, children, song}) {
    console.log('res addGuestResponse brunch', firstname)
    return db.query(`UPDATE public."Guests" SET 
      alone='${alone}',
      brunch='${brunch}',
      coming='${coming}',
      has_children='${hasChildren}',
      lover_firstname='${loverFirstname}',
      children='${children}',
      song='${song}'
    WHERE firstname='${firstname}'
    AND lastname='${lastname}'`)
  }
}
