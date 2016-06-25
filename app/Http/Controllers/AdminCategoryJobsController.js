'use strict'

const Category = use('App/Model/Lowongancat');
class AdminCategoryJobsController {

    * index (request, response) {}
    * create (request, response) {}
    * store (request, response) {
    }
    * show (request, response) {
      return response.json(yield Category.fetch(), 200);
    }
    * edit (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = AdminCategoryJobsController
