'use strict'

const Lucid = use('Lucid')

class Salary extends Lucid {
  static get table () {
    return 'salaries'
  }
}

module.exports = Salary
