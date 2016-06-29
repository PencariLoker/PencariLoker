'use strict'

class Admin {

  * handle (request, response, next) {
    console.log(`Received request on ${request.url()}`)
    yield next
  }

}

module.exports = Admin
