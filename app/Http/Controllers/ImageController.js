'use strict'

var gm = require('gm');
var fs = require('fs');
const Helpers = use('Helpers')
class ImageController {

    * index (request, response) {
      const avatar = request.file('filegambar', {
        maxSize: '2mb',
        allowedExtensions: ['jpg', 'png', 'jpeg']
      })
      const userId = 209
      var ext = avatar.extension();
      var filename = Math.random().toString();
      const fileName = `${userId}.${avatar.extension()}`
      yield avatar.move(Helpers.storagePath(), fileName)
      return response.json({status: 'ok', data: Helpers.storagePath()});
    }
    * create (request, response) {}
    * store (request, response) {}
    * show (request, response) {}
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = ImageController
