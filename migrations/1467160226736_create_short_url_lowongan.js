'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
    this.table('lowongans', function (table) {
      table.string('shorturl').after('tanggalberakhir');
    })
  }

  down () {
    this.table('lowongans', function (table) {
      table.dropColumn('shorturl');
    })
  }

}

module.exports = NewSchema
