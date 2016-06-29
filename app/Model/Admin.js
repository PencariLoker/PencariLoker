'use strict'

const Lucid = use("Lucid")

class Admin extends Lucid {
  static get table () {
    return 'admin'
  }

  // to disable softDeletes
  static get softDeletes () {
    return false
  }
}

module.exports = Admin
