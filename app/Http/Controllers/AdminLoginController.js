'use strict'

const Hash  = use('Hash');
const Admin = use('App/Model/Admin');
class AdminLoginController {

    * index (request, response) {
      const view = yield response.view('backend/Login.html');
      return response.send(view)
    }
    * login (request, response) {
      const all = request.all();
      const email = all.email;
      const password = all.password;
      const admin = yield Admin.where('email', email).first();
      const isSame = yield Hash.verify(password, admin.password);

       if (isSame) {
          var adminStatus = {
            'login_at' : new Date,
            'email'    : admin.email
          }

          yield request.session.put('admin', adminStatus);
          return response.json({status: 'ok'});
      }
      return response.json({status: 'INVALID_LOGIN'});
    }

    * logout(request, response){
      yield request.session.forget('admin');
      return response.redirect('/admin/login');
    }
}

module.exports = AdminLoginController
