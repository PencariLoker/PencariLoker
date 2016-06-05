'use strict'
const User = use('App/Model/Users')
const Company = use('App/Model/Company')
const Lowongan = use('App/Model/Lowongan')
const Lowongancat = use('App/Model/Lowongancat')

class JobsController {
  
    * index (request, response) {

    }
    * firstInitData(request,response){
        var data = {};
        data.companies = yield Company;
        data.lowongancat = yield Lowongancat;
        data.lowongans = yield Lowongan;
        console.log(yield Lowongan.innerJoin('companies','lowongans.id','companies.id'));
        response.json(data);
    }
    
}
module.exports = JobsController
