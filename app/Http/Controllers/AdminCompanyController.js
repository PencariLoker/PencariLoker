'use strict'

const Company = use('App/Model/Company');
class AdminCompanyController {
  * store(request, response){
    var all = request.all();
    const company = new Company()
    company.name = all.name
    company.industry  = all.industry
    company.email  = all.email
    company.address  = all.address
    company.phone  = all.phone
    company.logo  = all.logo
    company.lat  = all.lat
    company.lng  = all.lng
    company.website  = all.website
    company.size  = all.size

    yield company.save() // SQL Insert
    return response.json({'status' : 'ok'},200);
  }
  * edit(request, response){
    var all = request.all();
    const companyId = request.param('companyId')
    const company = yield Company.findBy('id',companyId);
    return response.json({'status' : 'ok', data: company},200);
  }

  * update (request, response){
    var all = request.all();
    const company = yield Company.findBy('id', all.id)
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
    yield company.save() // SQL Update
    return response.json({status : 'ok', data: all},200);
  }

  * show (request, response){
    const posts = yield Company.query();
    console.log(posts);
    return response.json(posts,200);
  }
  * destroy (request, response){
    var all = request.all();
    const company = yield Company.findBy('id', all.id)
    yield company.delete()
    return response.json({status : 'ok'},200);
  }
}

module.exports = AdminCompanyController
