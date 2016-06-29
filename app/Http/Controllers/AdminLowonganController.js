'use strict'
var Lowongan = use('App/Model/Lowongan');
const google = require('googleapis');
class AdminLowonganController {

    * index (request, response) {}
    * create (request, response) {}
    * store (request, response) {
      var all = request.all();
      var API_KEY = 'AIzaSyBS5Xp6T5vm6b3RJ00hfrVaTdYRrIEqHMo'; // specify your API key here
      var urlshortener = google.urlshortener({version : 'v1', auth : API_KEY});
      var params =  {'resource': {'longUrl': 'http://localhost:3000'}};
      /*resultURl = yield urlshortener.url.insert(params, yield function (err, response) {
        if (err) {
          console.log('Encountered error', err);
        } else {
          console.log('URL is', response);
          return 1;
        }
      });*/
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
      yield Lowongan.create({'name' : all.name,
                       'company_id' :  all.company,
                       'lowongancat_id' : all.category,
                       'descript': all.description,
                       gaji : all.salary,
                       tanggalberakhir: all.duedate,
                       'shorturl' : resultURl,
                       'kotaprovinsi': all.region})
      return response.json({'status' : 'ok', data : all},200);
    }
    * show (request, response) {
      const ab = yield Lowongan.select('id', 'name', 'company_id','descript','gaji', 'lowongancat_id', 'created_at', 'tanggalberakhir').with('company', 'lowongancat').fetch();
      var a = {'status' : 'ok', lowongan:ab};
      return response.send(a, 200);
    }
    * edit (request, response) {
      var lowongan_id = request.param('lowongan_id');
      return response.json({'status' : 'ok', data: yield Lowongan.where('id', lowongan_id).first()},200);
    }
    * update (request, response) {
      const all = request.all();
      const lowongan = yield Lowongan.find(all.id)
      lowongan.lowongancat_id = all.category;
      lowongan.company_id = all.company;
      lowongan.name = all.name;
      lowongan.descript = all.descript;
      lowongan.kotaprovinsi = all.region;
      lowongan.tanggalberakhir = all.duedate;
      yield lowongan.update();
      return response.json({status: all}, 200);
    }
    * destroy (request, response) {
      var all = request.all();
      const user = yield Lowongan.find(all.id);
      yield user.delete();
      return response.json({status: 'ok'}, 200);
    }
}

module.exports = AdminLowonganController
