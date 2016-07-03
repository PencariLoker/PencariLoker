'use strict'

const Schema = use('Schema')

class CreateCvUsersSchema extends Schema {

  up () {
    this.table('users', (table) => {
      // alter create_cv_users table
      table.string('cv_url').after('admin')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('cv_url');
    })
  }

}

module.exports = CreateCvUsersSchema
