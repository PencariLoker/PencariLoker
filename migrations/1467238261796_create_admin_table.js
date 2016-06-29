'use strict'

const Schema = use('Schema');
const Hash = use('Hash')
const Company = use('App/Model/Admin');
class NewSchema extends Schema {

  up () {
    this.create('admin', function (table) {
      table.increments('id')
      table.string('username');
      table.string('email');
      table.string('password');
      table.timestamps()
      table.timestamp('deleted_at')
    });

     Company.create({'username' : 'bar', 'email' : 'foo'});
  }

  down () {
    this.drop('admin')
  }

}

module.exports = NewSchema
