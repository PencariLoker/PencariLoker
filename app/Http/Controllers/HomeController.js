'use strict'

const User = use('App/Model/Users')
var bcrypt = require('bcryptjs');
var auth = use('App/Http/Controllers/AuthController');

class HomeController {
  * index (request, response) {
	  var salt = bcrypt.genSaltSync(10);
	  var hash = bcrypt.hashSync("B4c0/\/", salt);
    const view = yield response.view('frontend/home.html');
    response.send(view)
  }

  * jobdetails (request, response) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0/\/", salt);
    const view = yield response.view('frontend/jobDetails.html');
    response.send(view)
  }

  * jobs (request, response) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0/\/", salt);
    const view = yield response.view('frontend/jobs.html');
    response.send(view)
  }

  * home (request, response) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync('B4c0/\/', salt)
    const view = yield response.view('layout/home.html', {title: hash})
    response.send(view)
  }

  * profile (request, response) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync('B4c0/\/', salt)
    const view = yield response.view('frontend/profile.html');
    response.send(view)
  }

  * tester (request, response) {
    console.log('sad')
  }

  * test (request, response) {
    const users = yield User.select('linkedin_id').where('linkedin_id','1111');
    response.send(users)
  }

}

module.exports = HomeController
