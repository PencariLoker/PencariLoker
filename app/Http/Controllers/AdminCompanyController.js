'use strict'

const Company = use('App/Model/Company');
const gm = require('gm');
const fs = require('fs');
class AdminCompanyController {

    * index (request, response) {}
    * create (request, response) {}
    * store (request, response) {
      var all = request.all();
      Company.create({'name' : all.name, 'industry' : all.industry,
                      'email' : all.email, address : all.address,
                      phone : all.phone, logo : all.logo,
                      lat: all.lat, lng: all.lng,
                      'website' : all.website, 'size' : all.size});
      return response.json({'status' : 'ok'},200);
    }
    * show (request, response) {
      return response.json(yield Company.fetch(),200);
    }
    * edit (request, response) {
      var all = request.all();
      const companyId = request.param('companyId')
      const company = yield Company.where('id', companyId).first();
      return response.json({'status' : 'ok', data: company},200);
    }
    * update (request, response) {
      var all = request.all();
      const company = yield Company.find(all.id)
      company.name = all.name;
      company.industry = all.industry;
      company.email = all.email;
      company.address = all.address;
      company.phone = all.phone;
      company.website = all.website;
      company.size = all.size;
      company.logo = all.logo;
      company.lat = all.lat;
      company.lng = all.lng;
      yield company.update();
      return response.json({status : 'ok', data: all},200);
    }
    * destroy (request, response) {
      var all = request.all();
      const user = yield Company.find(all.id);
      yield user.delete();
      return response.json({status : 'ok'},200);
    }
}

module.exports = AdminCompanyController
