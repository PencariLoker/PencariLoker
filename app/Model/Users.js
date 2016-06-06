'use strict'

const Lucid = use("Lucid");
var inDatabase = false;

class Users extends Lucid {
	static get table(){
		return 'users'
	}
}

module.exports = Users
