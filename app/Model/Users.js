'use strict'

const Lucid = use("Lucid");
var Database = use('Database');

class Users extends Lucid {
	static get table(){
		return 'users'
	}
}

module.exports = Users
