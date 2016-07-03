'use strict'

class AdminLoginController {
  * index (request, response){
    const view = yield response.view('backend/Login')
    return response.send(view);
  }

  * login (request, response){
    const email = request.input('email')
    const password = request.input('password')
    try {
      const login = yield request.auth.attempt(email, password)
       if (login) {
        return response.json({status: 'ok'});
      }
    }
    catch(UserNotFoundException) {
      return response.json({status: 'INVALID_LOGIN'});
    }
  }
}

module.exports = AdminLoginController
