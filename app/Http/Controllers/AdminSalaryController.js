'use strict'

const Salary = use('App/Model/Salary');
class AdminSalaryController {

    * index (request, response) {}
    * create (request, response) {}
    * store (request, response) {
      var all = request.all();
      const a = yield Salary.create({'name' : all.name})
      return response.json({'status' : 'ok', 'id' : a[0]},200)
    }
    * show (request, response) {
      return response.json(yield Salary,200)
    }
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {
      var all = request.all();
      const a = yield Salary.find(all.id)
      yield a.forceDelete()
      return response.json({'status': 'ok'}, 200);
    }
}

module.exports = AdminSalaryController
