'use strict'

var Lowongan = use('App/Model/Lowongan');
const google = require('googleapis');
class AdminLowonganController {
  * edit (request, response) {
      var lowongan_id = request.param('lowongan_id');
      return response.json({'status' : 'ok', data: yield Lowongan.findBy('id', lowongan_id)},200);
  }

  * update (request, response) {
      const all = request.all();
      const lowongan = yield Lowongan.findBy('id', all.id)
      lowongan.lowongancat_id = all.category;
      lowongan.company_id = all.company;
      lowongan.name = all.name;
      lowongan.descript = all.descript;
      lowongan.kotaprovinsi = all.region;
      lowongan.tanggalberakhir = all.duedate;
      yield lowongan.save();
      return response.json({status: all}, 200);
  }

  * store (request, response) {
      var all = request.all();
      var API_KEY = 'AIzaSyBS5Xp6T5vm6b3RJ00hfrVaTdYRrIEqHMo'; // specify your API key here
      var urlshortener = google.urlshortener({version : 'v1', auth : API_KEY});
      var params =  {'resource': {'longUrl': 'http://localhost:3000'}};
      var prom = function(){
        return new Promise(function(resolve,reject){
          urlshortener.url.insert(params, function (err, response) {
            if (err) {
              console.log('Encountered error', err);
            } else {
              console.log('URL is', response);
              resolve(response.id)
            }
          });
        });
      }
      const resultURl = yield prom();
      const lowongan = new Lowongan
      lowongan.name  = all.name
      lowongan.company_id = all.company
      lowongan.lowongancat_id = all.category
      lowongan.descript = all.description
      lowongan.gaji = all.salary,
      lowongan.tanggalberakhir =  all.duedate,
      lowongan.shorturl = resultURl,
      lowongan.kotaprovinsi = all.region
      yield lowongan.save() // SQL Insert
      return response.json({'status' : 'ok', data : all},200);
    }

  * show (request, response) {
      const ab = yield Lowongan.with('company', 'lowongancat').fetch();
      var a = {'status' : 'ok', lowongan:ab};
      return response.send(a, 200);
  }
  * destroy (request, response) {
      var all = request.all();
      const lowongan = yield Lowongan.findBy('id', all.id);
      yield lowongan.delete()
      return response.json({status: 'ok'}, 200);
  }
}

module.exports = AdminLowonganController
