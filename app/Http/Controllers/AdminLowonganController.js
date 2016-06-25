'use strict'
var Lowongan = use('App/Model/Lowongan');
class AdminLowonganController {

    * index (request, response) {}
    * create (request, response) {}
    * store (request, response) {
      var all = request.all();
      yield Lowongan.create({'name' : all.name,
                       'company_id' :  all.company,
                       'lowongancat_id' : all.category,
                       'descript': all.description,
                       gaji : all.salary,
                       tanggalberakhir: all.duedate,
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
