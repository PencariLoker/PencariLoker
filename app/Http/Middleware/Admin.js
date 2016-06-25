'use strict'

class Admin {

  *handle (request, response, next) {
    // yield next once middleware expectation
    // have been satisfied
    response.status(401).send("Login first")
  }

}

module.exports = Admin
