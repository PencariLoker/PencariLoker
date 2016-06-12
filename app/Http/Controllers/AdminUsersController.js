'use strict'
const User = use('App/Model/Users');
const CompanyCC = use('App/Model/Company');
const LowonganCat = use('App/Model/Lowongan');
const Database = use('Database')
var os = require('os');
class AdminUsersController {

    * index (request, response) {
    	const view = yield response.view('backend/Users.html')
    	response.send(view)
    }
    * create (request, response) {
        const semua = yield request.all();
        User.create({
            'name'     : "Nipe Setiwan Harefa",
            'email'    : 'email@gmail.com'
        })
        response.send(semua);
    }
    * addUser(request,response){
        var semua = yield request.all();
        delete semua._csrf;
        if(User.inDatabase){
            yield User.where('linkedin_id',semua.linkedin_id).update(semua);
            console.log("masuk ada");
        }else{
            console.log("masuk gk ada");
            yield User.create(semua);
        }
        User.inDatabase = true;
        response.json({redirect:'/profile'});
    }
    * store (request, response) {}
    * show (request, response) {}
    * list (request, response){
        const user = yield User;
        response.json(user);
    }
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
    * server (request, response) {
        var arr = {
          hostname : os.hostname(),
          arch     : os.arch(),
          platform : os.platform(),
          release  : os.release(),
          type     : os.type(),
          homedir  : os.homedir(),
          EOL      : os.EOL,
        }
        return response.json(arr);
    }
    * company (request, response) {
        var a = yield CompanyCC.select('id', 'website', 'email').with('lowongans').fetch();
        return response.send(a);
    }
}

module.exports = AdminUsersController
