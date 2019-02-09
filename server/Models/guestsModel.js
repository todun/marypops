const db = require('./db.js')

module.exports = {

  getGuests () {
    return db.query('SELECT * FROM public."Guests"')
  },

  getSongs () {
    return db.query('SELECT song FROM public."Guests"')
  },

  getGuestByFirstname ({link, firstname}) {
    return db.query(`SELECT * FROM public."Guests" WHERE link='${link}' AND firstname='${firstname}'`)
  },

  getGuestByFirstnameAndLastname ({link, firstname, lastname}) {
    return db.query(`SELECT * FROM public."Guests" WHERE link='${link}' AND firstname='${firstname}' AND lastname='${lastname}'`)
  },

  addGuestData ({link, firstname, lastname, email, phone, address}) {
    return db.query(`UPDATE public."Guests" SET 
      email='${email}',
      phone='${phone}',
      address='${address}'
    WHERE link='${link}'
    AND firstname='${firstname}'
    AND lastname='${lastname}'`)
  },

  addGuestResponse ({link, firstname, lastname, email, phone, address, alone, coming, brunch, hasChildren, loverFirstname, children, song, fillForm}) {
    console.log('res addGuestResponse brunch', lastname)
    console.log('res addGuestResponse brunch', link)
    console.log('res addGuestResponse brunch', firstname)
    return db.query(`UPDATE public."Guests" SET 
      fill_form='${fillForm}',
      email='${email}',
      phone='${phone}',
      address='${address}',
      alone='${alone}',
      brunch='${brunch}',
      coming='${coming}',
      has_children='${hasChildren}',
      lover_firstname='${loverFirstname}',
      children='${children}',
      song='${song}'
    WHERE link='${link}'
    AND firstname='${firstname}'
    AND lastname='${lastname}'`)
  }
}
