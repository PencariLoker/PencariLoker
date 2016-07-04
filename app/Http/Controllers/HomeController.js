'use strict'

const User = use('App/Model/Users')
const Company = use('App/Model/Company')
const Lowongan = use('App/Model/Lowongan')
const Lowongancat = use('App/Model/Lowongancat')
const ItemPerPage = 10;
const Helpers = use('Helpers')
const path = require('path');
var fs = require('fs');
require('pdfjs-dist');

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
  
  *getPage(request,response){
    var semua = yield request.all();
    delete semua._csrf;
    var data = {};

    if(semua.idcomp == "" && semua.idcat == ""){
        data.lowongans = yield Lowongan.with('company','lowongancat').limit(ItemPerPage).offset((semua.page -1) * ItemPerPage).fetch();
    }else if(semua.idcomp == ""){
        data.lowongans = yield Lowongan.where('lowongancat_id',semua.idcat).with('company','lowongancat').limit(ItemPerPage).offset((semua.page -1) * ItemPerPage).fetch();
    }else if(semua.idcat == ""){
        data.lowongans = yield Lowongan.where('company_id',semua.idcomp).with('company','lowongancat').limit(ItemPerPage).offset((semua.page -1) * ItemPerPage).fetch();
    }else{
        data.lowongans = yield Lowongan.where(function () {
          this.where('lowongancat_id',semua.idcat);
          this.where('company_id',semua.idcomp)
        }).with('company','lowongancat').limit(ItemPerPage).offset((semua.page -1) * ItemPerPage).fetch();
    }
    data.lowongans = data.lowongans.toJSON();

    response.json(data);
  }

  * userSession(request, response){
    //yield request.auth.loginViaId(6)

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

  * profile (request, response){
    const view = yield response.view('frontend/profile');
    return response.send(view)
  }
  * profiledata (request, response){
    const userSession = yield request.auth.getUser();
    const user_id = userSession.id;

    const user = yield User.findBy('id', user_id);

    var data = {
      photo_url : user.photo_url,
      name : user.name,
      email : user.email,
      gender : user.gender,
      birthdate : user.birthday,
      phone : user.phone,
      address : user.address,
      city : user.city,
      cvurl : user.cv_url,
    }
    return response.json(data, 200);
  }

  * saveprofile (request, response){
    const all = yield request.all();
    const userSession = yield request.auth.getUser();
    const user_id = userSession.id;

    const check = yield User.findBy('id', user_id);

    check.name = all.name;
    check.phone = all.phone;
    check.birthday = all.birthdate;
    check.city = all.city;
    check.address = all.address;
    check.cv_url = all.cvurl;

    yield check.save();
    return response.json({'status' : 'ok'}, 200);
  }

  * uploadCV (request, response){
    const avatar = request.file('filegambar');

    console.log(avatar);
    const userId = (Math.random()+1).toString(26).substring(10);
    const fileName = `${userId}.${avatar.extension()}`

    yield avatar.move(Helpers.storagePath(), fileName);

    return response.json({'status' : 'ok', filename : fileName}, 200);
  }
  * viewPDF (request, response){
    const filename = request.param('filename')
    const url = path.join(Helpers.storagePath(), filename);
    var data = fs.readFileSync(url);
    response.header('Content-type', 'application/pdf')
    response.header("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    response.header("Pragma", "no-cache"); // HTTP 1.0.
    response.header("Expires", "0"); // Proxies.
    response.header("X-Powered-By", "PencariLoker"); // Proxies.
    return response.send(data);
  }
}

module.exports = HomeController
