'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
    this.create('salaries', function (table) {
      table.increments('id')
      table.string('name')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('salaries')
  }

}

module.exports = NewSchema
