const db = require('./db.js')

module.exports = {

  getToken () {
    return db.query('SELECT token FROM public."token" WHERE id=1')
  }

}
