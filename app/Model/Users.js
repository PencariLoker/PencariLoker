'use strict'

const Lucid = use("Lucid");
class Users extends Lucid {

	static get table(){
		return 'users'
	}
	static get softDeletes () {
        return 'deleted_at'
      }

      // to disable softDeletes
      static get softDeletes () {
        return false
      }
}

module.exports = Users
