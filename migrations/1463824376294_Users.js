'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
    this.create('users', function (table) {
      table.increments('id')
      table.string('linkedin_id',15);
      table.string('name')
      table.string('email')
      table.string('phone')
      table.boolean('gender')
      table.date('birthday')
      table.string('photo_url')
      table.string('address')
      table.string('city')
      table.boolean('admin').defaultTo(false);
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('users');
  }

}

module.exports = NewSchema
