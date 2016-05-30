'use strict'
var Linkedin = require('node-linkedin')('75nb5nsun5gsp3', 'OKFiE0UtZNFHfk2p', 'http://localhost:3000/authentication')
class AuthController {
  * authentication (request, response) {
    Linkedin.auth.authorize(response, ['r_basicprofile', 'r_emailaddress', 'w_share'])
  }
  * accessToken (request, response) {
    var tmp = request.get()
    var nipe2 = function () {
      return new Promise(function (resolve, reject) {
        Linkedin.auth.getAccessToken(response, tmp.code, tmp.state, function (err, results) {
          if (err)
            resolve(err)

          resolve(results)
        })
      })
    }

    // Session
    const nipe = yield nipe2();
    yield request.session.put('access_token', 'value')
    var linkedin = Linkedin.init(nipe.access_token);
    linkedin.people.me(function(err, $in) {        
    });
  }
}

module.exports = AuthController
