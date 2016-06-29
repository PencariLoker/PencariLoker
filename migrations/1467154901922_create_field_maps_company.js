  'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
    this.table('companies', function (table) {
      table.string('lat').after('address');
      table.string('lng').after('lat');
    })
  }

  down () {
     this.table('companies', function (table) {
      table.dropColumn('lat')
      table.dropColumn('lng')
    })
  }

}

module.exports = NewSchema
