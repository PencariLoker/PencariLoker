'use strict'
var bcrypt = require('bcryptjs');

class HomeController {
  * index (request, response) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync("B4c0/\/", salt);
    const view = yield response.view('layout/home.html', {title: hash})
    response.send(view)
  }

  * home (request, response) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync("B4c0/\/", salt);
    const view = yield response.view('layout/home.html', {title: hash})
    response.send(view)
  }

  * tester (request, response){
  	console.log("sad");
  }

  * test (request, response){
    let genObj = this.tester();
    response.send(genObj.next());
  }

}

module.exports = HomeController
