'use strict'

const User = use('App/Model/Users')
var bcrypt = require('bcryptjs');
var auth = use('App/Http/Controllers/AuthController');

const Company = use('App/Model/Company')
const Lowongan = use('App/Model/Lowongan')
const Lowongancat = use('App/Model/Lowongancat')

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
    const lowongan = yield Company.all();
    var tmp = lowongan.toJSON();
    response.send(tmp)
  }

}

module.exports = HomeController
