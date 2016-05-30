'use strict'
const User = use('App/Model/Users')
class AdminUsersController {
  
    * index (request, response) {
    	const view = yield response.view('backend/Users.html')
    	response.send(view)
    }
    * create (request, response) {
        const semua = yield request.all();
        response.send(semua);
    }
    * store (request, response) {}
    * show (request, response) {}
    * list (request, response){
        const user = yield User;
        response.json(user);
    }
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = AdminUsersController
