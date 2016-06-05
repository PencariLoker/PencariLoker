'use strict'

const Lucid = use("Lucid");
var inDatabase = false;

class Lowongan extends Lucid {
	static get table(){
		return 'lowongans'
	}

	company()
    {
        return this.belongsTo('App/Model/Company');
    }
    lowongancat()
    {
        return this.belongsTo('App/Model/Lowongancat');
    }
}

module.exports = Lowongan
