const mysql = require('mysql')
const db_password = require('../config')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.67.210.117',
        user: 'root',
        password: Ilovemom12,
        database: 'admin',
        debug: false
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;