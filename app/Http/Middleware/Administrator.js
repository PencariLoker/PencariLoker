'use strict'

class Administrator {

  *handle (request, response, next) {
    // yield next once middleware expectation
    // have been satisfied
    //
    yield response.send('s');
  }

}

module.exports = Administrator
