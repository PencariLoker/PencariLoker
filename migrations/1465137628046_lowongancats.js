'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
    this.create('lowongancats', function (table) {
      table.increments('id')
      table.string('name', 50);
      table.boolean('active').defaultTo(false);
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('lowongancats')
  }

}

module.exports = NewSchema
