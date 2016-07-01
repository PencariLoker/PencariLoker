'use strict'

const env = use('Env');
const Users = use('App/Model/Users');
var Linkedin = require('node-linkedin')(env.get('LINKED_API'), env.get('LINKED_KEY'), env.get('LINKED_CALLBACK'));
class AuthController {
  * authentication (request, response) {
      Linkedin.auth.authorize(response, ['r_basicprofile', 'r_emailaddress', 'w_share'])
  }

  * accessToken (request, response) {
    var tmp = request.get();
    var prom = function(){
      return new Promise(function(resolve,reject){
        Linkedin.auth.getAccessToken(response, tmp.code, tmp.state, function(err, results) {
              if ( err )
                reject(err);
              resolve(results);
          });
      });
    }
    const resToken = yield prom();
    var linkedin = Linkedin.init(resToken.access_token, {
        timeout: 10000
    });

    var result = function(){
      return new Promise(function(resolve,reject){
        linkedin.people.me(function(err, $in) {
              resolve($in);
        });
      });
    }

    // Masukkin Databases
    const data = yield result();

    const check = yield Users.findBy('linkedin_id', data.id);
    const user = new Users()
    if (check){
      yield request.auth.login(check);
      const user = yield request.auth.getUser()
      return response.redirect("/");
    }
    else{
      user.name = data.formattedName
      user.linkedin_id = data.id
      user.email = data.emailAddress
      user.photo_url = data.pictureUrl
      yield user.save() // SQL Insert
      yield request.auth.login(user);
      return response.redirect("/");
    }
  }
  * logout(request, response){
    yield request.auth.logout();
    return response.redirect('/');
  }
}

module.exports = AuthController
