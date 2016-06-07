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
        data.companies = yield Company.all();
        data.companies = data.companies.toJSON();
        data.lowongancat = yield Lowongancat.all();
        data.lowongancat = data.lowongancat.toJSON();
        data.lowongans = yield Lowongan.with('company','lowongancat').fetch();
        data.lowongans = data.lowongans.toJSON();
        response.json(data);
    }
    * filterData(request,response){
        var semua = yield request.all();
        delete semua._csrf;
        var data = {};
        if(semua.idcomp == "" && semua.idcat == ""){
            data.lowongans = yield Lowongan.with('company','lowongancat').fetch();  
        }else if(semua.idcomp == ""){
            data.lowongans = yield Lowongan.where('lowongancat_id',semua.idcat).with('company','lowongancat').fetch();
        }else if(semua.idcat == ""){
            data.lowongans = yield Lowongan.where('company_id',semua.idcomp).with('company','lowongancat').fetch();
        }else{
            data.lowongans = yield Lowongan.where(function () {
              this.where('lowongancat_id',semua.idcat);
              this.where('company_id',semua.idcomp)
            }).with('company','lowongancat').fetch();
        }
        data.lowongans = data.lowongans.toJSON();
        response.json(data);
    }
    
}
module.exports = JobsController
