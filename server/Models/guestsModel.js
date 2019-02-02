const db = require('./db.js')

module.exports = {

  getGuests () {
    return db.query('SELECT * FROM public."Guests"')
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

  addGuestResponse ({link, firstname, lastname, fill_form, alone, brunch, coming, hasChildren, loverFirstname, children, song}) {
    console.log('res addGuestResponse brunch', link)
    return db.query(`UPDATE public."Guests" SET 
      fill_form='${fill_form}',
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
