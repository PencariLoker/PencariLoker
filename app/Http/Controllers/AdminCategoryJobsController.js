'use strict'
const Category = use('App/Model/Lowongancat');
class AdminCategoryJobsController {
  * show (request, response) {
      return response.json(yield Category.query(), 200);
  }

  * add (request, response){
    const all = request.all();
    const category = new Category;
    category.name = all.name;
    yield category.save();
    return response.json({status: 'ok', category : category},200);
  }

  * delete (request, response){
    const all = request.all();
    const category = yield Category.findBy('id', all.id);
    yield category.delete()
    return response.json({status: 'ok'}, 200);
  }
}

module.exports = AdminCategoryJobsController
