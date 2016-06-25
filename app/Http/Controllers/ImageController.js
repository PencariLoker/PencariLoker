'use strict'

var gm = require('gm');
var fs = require('fs');
class ImageController {

    * index (request, response) {
      /*gm("logo.png").thumb(20, 20, 's.jpg', 70, function(err, stdout, stderr, command){
        console.log(err, "asdfd");
      });*/
      var all = request.all();
      var image = all.data;
      var data = image.replace(/^data:image\/\w+;base64,/, '');
      fs.writeFile('fileName.jpg', data, {encoding: 'base64'}, function(err){
        //Finished
        console.log(err);
      });
      return response.json({status: 'ok', data: request.all()});
    }
    * create (request, response) {}
    * store (request, response) {}
    * show (request, response) {}
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = ImageController
