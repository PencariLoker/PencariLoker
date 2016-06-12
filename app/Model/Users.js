'use strict'

const Lucid = use('Lucid')
var inDatabase = false

class Users extends Lucid {

  static get table () {
    return 'users'
  }
  static get softDeletes () {
    return 'deleted_at'
  }

  // to disable softDeletes
  static get softDeletes () {
    return false
  }
  company () {
    return this.belongsTo('App/Model/Company')
  }
}

module.exports = Users
