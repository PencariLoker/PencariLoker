'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
    this.create('regions', function (table) {
      table.increments('id')
      table.string('city_name')
      table.string('country_name')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('regions')
  }

}

module.exports = NewSchema
