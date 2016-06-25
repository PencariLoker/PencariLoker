'use strict'
var bodyParser = use('Adonis/Middleware/BodyParser')
class Auth {

  *handle (request, response, next) {
    yield next;
  }

}

module.exports = Auth
