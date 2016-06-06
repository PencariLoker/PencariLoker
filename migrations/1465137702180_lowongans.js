'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
    this.create('lowongans', function (table) {
      table.increments('id')
      table.timestamp('deleted_at')
      table.integer('lowongancat_id').unsigned();
      table.integer('company_id').unsigned();
      table.string('name', 100);
      table.text('highlight', 65535);
      table.text('descript', 65535);
      table.string('gmaps')
      table.text('photos', 65535)
      table.string('gaji', 30);
      table.string('syaratpengalaman', 60);
      table.string('kotaprovinsi', 30);
      table.dateTime('tanggalberakhir').defaultTo('0000-00-00 00:00:00');
      table.boolean('active').defaultTo(0);
      table.timestamps();
      //table.index(['id','lowongancat_id','company_id','name'], '`id`');
    })
  }

  down () {
    this.drop('lowongans')
  }

}

module.exports = NewSchema
