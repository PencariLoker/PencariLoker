'use strict'

const Schema = use('Schema')
class NewSchema extends Schema {

  up () {
    this.create('companies', function (table) {
      table.increments('id')
      table.string('name')
      table.string('industry')
      table.string('website')
      table.string('phone')
      table.string('website')
      table.string('size')
      table.text('address')
      table.string('logo_path')
      table.boolean('active')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('companies')
  }

}

module.exports = NewSchema
