'use strict'

const Schema = use('Schema')
class NewSchema extends Schema {

  up () {
    this.create('companies', function (table) {
      table.increments('id')
      table.string('logo')
      table.string('name',100)
      table.string('industry',150)
      table.string('website',100)
      table.string('size',50)
      table.string('phone', 50)
      table.string('email', 40)
      table.text('address')
      table.boolean('active').defaultTo(false);
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('companies')
  }

}

module.exports = NewSchema
