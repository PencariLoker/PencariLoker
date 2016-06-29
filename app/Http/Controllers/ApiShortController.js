'use strict'

const google = require('googleapis');
class ApiShortController {

    * index (request, response) {
      var google = require('googleapis');
      var plus = google.plus('v1');

      var API_KEY = 'AIzaSyBS5Xp6T5vm6b3RJ00hfrVaTdYRrIEqHMo'; // specify your API key here

      var urlshortener = google.urlshortener({version : 'v1', auth : API_KEY});
      plus.people.get({ auth: API_KEY, userId: '+NipeHarefa' }, function(err, user) {
        console.log('Result: ' + (err ? err.message : user.displayName));
      });
      var params =  {'resource': {'longUrl': 'http://localhost:3000'}};

    // get the long url of a shortened url
    urlshortener.url.insert(params, function (err, response) {
      if (err) {
        console.log('Encountered error', err);
      } else {
        console.log('URL is', response);
      }
    });

      return response.send('asldkfjasdkf');
    }
    * create (request, response) {}
    * store (request, response) {}
    * show (request, response) {}
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = ApiShortController
