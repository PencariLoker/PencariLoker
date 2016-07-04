'use strict'

class AdminLoginController {
  * index (request, response){
    const view = yield response.view('backend/Login')
    return response.send(view);
  }

  * login (request, response){
    const email = request.input('email')
    const password = request.input('password')
    //if (email == 'admin@example.com' && password == 'admin') {
     // return response.json({status: 'ok'});
    //}
    //try {
      //const login = yield request.auth.attempt(email, password)
    //}
    //catch(UserNotFoundException) {
      //return response.json({status: 'INVALID_LOGIN'});
    //}
    const login = yield request.auth.attempt(email, password)
    
    if (login)
	return response.json({status: 'ok'});

    return response.json({status: 'INVALID_LOGIN'});
  }
}

module.exports = AdminLoginController
