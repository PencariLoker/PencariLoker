'use strict'
var bcrypt = require('bcryptjs')
const User = use('App/Model/Users')
class HomeController {
  * index (request, response) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync('B4c0/\/', salt)
    const view = yield response.view('layout/home.html', {title: hash})
    response.send(view)
  }

  * home (request, response) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync('B4c0/\/', salt)
    const view = yield response.view('layout/home.html', {title: hash})
    response.send(view)
  }

  * tester (request, response) {
    console.log('sad')
  }

  * test (request, response) {
    /*var hash = bcrypt.hashSync("nipehareaf", 10);
    yield User.create({'name' : 'Lorem', 'email' : 'foo@bar.com', 'password' : hash})*/
    const user = yield User.find(1)

    if (user.isTrashed()) {
      response.send("Trashed");
    };
  }

}

module.exports = HomeController
