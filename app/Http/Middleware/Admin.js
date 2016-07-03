'use strict'

class Admin {

  * handle (request, response, next) {
    const user = yield request.auth.getUser()
    //const isAdmin = user.admin;
    if (user && user.admin)
      yield next

    yield response.redirect('/admin/login')
  }

}

module.exports = Admin
