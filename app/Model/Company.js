'use strict'

const Lucid = use('Lucid')
var inDatabase = false

class Company extends Lucid {
  static get table () {
    return 'companies'
  }

  // to disable softDeletes
  static get softDeletes () {
    return false
  }

  lowongans () {
    return this.hasMany('App/Model/Lowongan')
  }
  author () {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Company
