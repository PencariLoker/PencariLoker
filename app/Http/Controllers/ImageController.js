'use strict'
const Helpers = use('Helpers')
var path  = require('path');

class ImageController {
  * index (request, response) {
      const avatar = request.file('filegambar', {
        maxSize: '2mb',
        allowedExtensions: ['jpg', 'png', 'jpeg']
      })
      const userId = Math.random().toString(30).substring(7);
      var ext = avatar.extension();
      var filename = Math.random().toString();
      const fileName = `${userId}.${avatar.extension()}`


      // PIndahkan FIle ke Folder Images
      var finalDestionation = path.join(Helpers.publicPath(), 'img');
      yield avatar.move(finalDestionation, fileName)


      return response.json({status: 'ok', data: fileName});
  }
}

module.exports = ImageController
