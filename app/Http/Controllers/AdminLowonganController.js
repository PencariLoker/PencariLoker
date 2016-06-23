'use strict'
const Lowongan = use('App/Model/Lowongan');
class AdminLowonganController {

    * index (request, response) {}
    * create (request, response) {}
    * store (request, response) {
      var all = request.all();
      yield Lowongan.create({'name' : all.name,
                       'company_id' :  all.company,
                       'lowongancat_id' : all.category,
                       'descript': all.description,
                       'kotaprovinsi': all.region})
      return response.json({'status' : 'ok', data : all},200);
    }
    * show (request, response) {
      const a = yield Lowongan.select('id', 'name', 'company_id', 'lowongancat_id', 'created_at').with('company', 'lowongancat').fetch();
      return response.json(a, 200);
    }
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = AdminLowonganController
