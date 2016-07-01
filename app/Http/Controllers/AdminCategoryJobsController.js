'use strict'
const Category = use('App/Model/Lowongancat');
class AdminCategoryJobsController {
  * show (request, response) {
      return response.json(yield Category.query(), 200);
    }
}

module.exports = AdminCategoryJobsController
