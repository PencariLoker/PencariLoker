'use strict'

class ImageController {

    * index (request, response) {
      const profile = request.file('profile')
      return response.json({'status' : 'ko', data: profile});
    }
    * create (request, response) {}
    * store (request, response) {}
    * show (request, response) {}
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = ImageController
