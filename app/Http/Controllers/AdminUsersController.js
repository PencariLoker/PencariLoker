'use strict'
const User = use('App/Model/Users')

class AdminUsersController {
  
    * index (request, response) {
    	const view = yield response.view('backend/Users.html')
    	response.send(view)
    }
    * create (request, response) {
        const semua = yield request.all();
        User.create({
            'username' : semua.username,
            'name'     : semua.name,
            'email'    : semua.email,
            'password' : semua.password,
        })
        response.send(semua.username);
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
}

module.exports = AdminUsersController
