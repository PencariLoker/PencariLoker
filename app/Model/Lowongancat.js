'use strict'

const Lucid = use("Lucid");
var inDatabase = false;

class Lowongancat extends Lucid {
	static get table(){
		return 'lowongancats'
	}

	lowongans()
    {
        return this.hasMany('App/Model/Lowongan');
    }
}

module.exports = Lowongancat
