'use strict'

const User = use('App/Model/Users')
const Company = use('App/Model/Company')
const Lowongan = use('App/Model/Lowongan')
const Lowongancat = use('App/Model/Lowongancat')
const ItemPerPage = 10;

class HomeController {
  * jobsInit (request, response){
    var data = {}
    data.companies = yield Company.query ();
    data.lowongancat = yield Lowongancat.query();
    data.totalPage = yield Lowongan.query('company','lowongancat').fetch();
    data.totalPage = data.totalPage.size();
    data.totalPage = Math.ceil(data.totalPage /ItemPerPage);
    data.lowongans = yield Lowongan.with('company','lowongancat').limit(ItemPerPage).fetch();
    return response.json(data, 200);
  }
  * jobdetails (request, response) {
    const view = yield response.view('frontend/jobDetails');
    response.send(view)
  }

  * getJobDetails(request,response){
        var semua = yield request.all();
        var index = semua.index;
        var lowongan = yield Lowongan.query().where('id', index).with('company', 'lowongancat').first();
        return response.json(lowongan);
  }

  * filterData(request,response){
        var semua = yield request.all();
        delete semua._csrf;
        var data = {};

        if(semua.idcomp == "" && semua.idcat == ""){
            data.totalPage = yield Lowongan.query().with('company','lowongancat').fetch();
        }else if(semua.idcomp == ""){
            data.totalPage = yield Lowongan.query().where('lowongancat_id',semua.idcat).with('company','lowongancat').fetch();
        }else if(semua.idcat == ""){
            data.totalPage = yield Lowongan.query().where('company_id',semua.idcomp).with('company','lowongancat').fetch();
        }else{
            data.totalPage = yield Lowongan.query().where(function () {
              this.where('lowongancat_id',semua.idcat);
              this.where('company_id',semua.idcomp)
            }).with('company','lowongancat').fetch();
        }
        data.totalPage = data.totalPage.size();
        data.totalPage = Math.ceil(data.totalPage /ItemPerPage);

        if(semua.idcomp == "" && semua.idcat == ""){
            data.lowongans = yield Lowongan.query().with('company','lowongancat').limit(ItemPerPage).fetch();
        }else if(semua.idcomp == ""){
            data.lowongans = yield Lowongan.query().where('lowongancat_id',semua.idcat).with('company','lowongancat').limit(ItemPerPage).fetch();
        }else if(semua.idcat == ""){
            data.lowongans = yield Lowongan.query().where('company_id',semua.idcomp).with('company','lowongancat').limit(ItemPerPage).fetch();
        }else{
            data.lowongans = yield Lowongan.query().where(function () {
              this.where('lowongancat_id',semua.idcat);
              this.where('company_id',semua.idcomp)
            }).with('company','lowongancat').limit(ItemPerPage).fetch();
        }
        data.lowongans = data.lowongans.toJSON();

        response.json(data);
    }

  * jobs (request, response) {
    const view = yield response.view('frontend/jobs');
    response.send(view)
  }

  * userSession(request, response){
    yield request.auth.loginViaId(6)

    const logged = yield request.auth.check();

    //console.log(yield request.auth.check());
    //console.log(yield request.auth.getUser());

    const user = yield request.auth.getUser();

    var data = {
      guest : logged,
      user : user,
    }

    return response.json(data, 200);
  }
}

module.exports = HomeController
