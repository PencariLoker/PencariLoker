'use strict'

const Company = use('App/Model/Company');
class AdminCompanyController {

    * index (request, response) {}
    * create (request, response) {}
    * store (request, response) {
      var all = request.all();
      Company.create({'name' : all.name, 'industry' : all.industry,
                      'email' : all.email, address : all.address,
                      phone : all.phone,
                      'website' : all.website, 'size' : all.size});
      return response.json({'status' : 'ok'},200);
    }
    * show (request, response) {
      return response.json(yield Company,200);
    }
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = AdminCompanyController
