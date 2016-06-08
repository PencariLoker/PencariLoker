'use strict'
const User = use('App/Model/Users')
const Company = use('App/Model/Company')
const Lowongan = use('App/Model/Lowongan')
const Lowongancat = use('App/Model/Lowongancat')
const ItemPerPage = 10;

class JobsController {
  
    * index (request, response) {

    }
    * firstInitData(request,response){
        var data = {};
        data.companies = yield Company.all();
        data.companies = data.companies.toJSON();
        data.lowongancat = yield Lowongancat.all();
        data.lowongancat = data.lowongancat.toJSON();
        data.totalPage = yield Lowongan.with('company','lowongancat').all();
        data.totalPage = data.totalPage.size();
        data.totalPage = Math.ceil(data.totalPage /ItemPerPage);

        data.lowongans = yield Lowongan.with('company','lowongancat').limit(ItemPerPage).fetch();
        data.lowongans = data.lowongans.toJSON();
        response.json(data);
    }
    * filterData(request,response){
        var semua = yield request.all();
        delete semua._csrf;
        var data = {};

        if(semua.idcomp == "" && semua.idcat == ""){
            data.totalPage = yield Lowongan.with('company','lowongancat').all();
        }else if(semua.idcomp == ""){
            data.totalPage = yield Lowongan.where('lowongancat_id',semua.idcat).with('company','lowongancat').all();
        }else if(semua.idcat == ""){
            data.totalPage = yield Lowongan.where('company_id',semua.idcomp).with('company','lowongancat').all();
        }else{
            data.totalPage = yield Lowongan.where(function () {
              this.where('lowongancat_id',semua.idcat);
              this.where('company_id',semua.idcomp)
            }).with('company','lowongancat').all();
        }
        data.totalPage = data.totalPage.size();
        data.totalPage = Math.ceil(data.totalPage /ItemPerPage);
        
        if(semua.idcomp == "" && semua.idcat == ""){
            data.lowongans = yield Lowongan.with('company','lowongancat').limit(ItemPerPage).fetch();
        }else if(semua.idcomp == ""){
            data.lowongans = yield Lowongan.where('lowongancat_id',semua.idcat).with('company','lowongancat').limit(ItemPerPage).fetch();
        }else if(semua.idcat == ""){
            data.lowongans = yield Lowongan.where('company_id',semua.idcomp).with('company','lowongancat').limit(ItemPerPage).fetch();
        }else{
            data.lowongans = yield Lowongan.where(function () {
              this.where('lowongancat_id',semua.idcat);
              this.where('company_id',semua.idcomp)
            }).with('company','lowongancat').limit(ItemPerPage).fetch();
        }
        data.lowongans = data.lowongans.toJSON();

        response.json(data);
    }
    *getPage(request,response){
        var semua = yield request.all();
        delete semua._csrf;
        var data = {};

        if(semua.idcomp == "" && semua.idcat == ""){
            data.lowongans = yield Lowongan.with('company','lowongancat').limit(2).offset((semua.page -1) * 2).fetch();
        }else if(semua.idcomp == ""){
            data.lowongans = yield Lowongan.where('lowongancat_id',semua.idcat).with('company','lowongancat').limit(2).offset((semua.page -1) * 2).fetch();
        }else if(semua.idcat == ""){
            data.lowongans = yield Lowongan.where('company_id',semua.idcomp).with('company','lowongancat').limit(2).offset((semua.page -1) * 2).fetch();
        }else{
            data.lowongans = yield Lowongan.where(function () {
              this.where('lowongancat_id',semua.idcat);
              this.where('company_id',semua.idcomp)
            }).with('company','lowongancat').limit(2).offset((semua.page -1) * 2).fetch();
        }
        data.lowongans = data.lowongans.toJSON();

        response.json(data);
    }
    
}
module.exports = JobsController
