'use strict'

const Company = use('App/Model/Company');
const gm = require('gm');
const fs = require('fs');
class AdminCompanyController {

    * index (request, response) {}
    * create (request, response) {}
    * store (request, response) {
      var all = request.all();
      var image = all.logo;
      var data = image.replace(/^data:image\/\w+;base64,/, '');
      var filename = 'logobaru'+ Math.random().toString() + '.jpg';
      fs.writeFile('public/' + filename, data, {encoding: 'base64'}, function(err){
        console.log(err);
      });
      Company.create({'name' : all.name, 'industry' : all.industry,
                      'email' : all.email, address : all.address,
                      phone : all.phone, logo : filename,
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

      if (all.logo_changed == 'true'){
        var image = all.logo;
        var data = image.replace(/^data:image\/\w+;base64,/, '');
        var filename = 'logobaru'+ Math.random().toString() + '.jpg';
        fs.writeFile('public/' + filename, data, {encoding: 'base64'}, function(err){
          console.log(err);
        });
        all.logo = filename;
      }
      const company = yield Company.find(all.id)
      company.name = all.name;
      company.industry = all.industry;
      company.email = all.email;
      company.address = all.address;
      company.phone = all.phone;
      company.website = all.website;
      company.size = all.size;
      company.logo = all.logo;
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
