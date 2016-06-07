'use strict'

const Lucid = use("Lucid");
var inDatabase = false;

class Lowongan extends Lucid {
	static get table(){
		return 'lowongans'
	}

    // to disable softDeletes
    static get softDeletes () {
        return false;
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
