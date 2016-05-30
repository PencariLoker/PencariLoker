'use strict'

class AdminCompanyController {
  
    * index (request, response) {
    	const view = yield response.view('backend/Company.html')
    	response.send(view)
    }
    * create (request, response) {}
    * store (request, response) {}
    * show (request, response) {}
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = AdminCompanyController
