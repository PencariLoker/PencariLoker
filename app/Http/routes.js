'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('frontend.home')
Route.get('/jobs', 'HomeController.jobs').as('jobs')
Route.get('/jobdetails/:id', 'HomeController.jobdetails').as('jobdetails')
Route.get('/getJobDetails', 'HomeController.getJobDetails');

Route.post('/filterData', 'HomeController.filterData')

Route.get('/jobsInit', 'HomeController.jobsInit');

Route.get('/data', 'HomeController.userSession');
Route.get('/oauth/linkedin', 'AuthController.authentication');
Route.get('/authentication', 'AuthController.accessToken');
Route.get('logout', 'AuthController.logout');

Route.on('/admin').render('backend.Users')
Route.get('/admin/users', 'AdminUsersController.index')
Route.post('/admin/users/add', 'AdminUsersController.addUser')
Route.get('/admin/users/list', 'AdminUsersController.list')


Route.post('/admin/company/add', 'AdminCompanyController.store');
Route.get('/admin/company/edit/:companyId', 'AdminCompanyController.edit');
Route.get('/admin/company/list', 'AdminCompanyController.show');
Route.put('/admin/company/edit/', 'AdminCompanyController.update');
Route.delete('/admin/company/delete', 'AdminCompanyController.destroy')



// Category
Route.get('/admin/category/list', 'AdminCategoryJobsController.show');
Route.post('admin/category', 'AdminCategoryJobsController.add');
Route.delete('/admin/category', 'AdminCategoryJobsController.delete');

Route.post('/api/image', 'ImageController.index');

//Lowongan
Route.post('/admin/lowongan/add', 'AdminLowonganController.store')
Route.get('/admin/lowongan/', 'AdminLowonganController.show')
Route.delete('/admin/lowongan/', 'AdminLowonganController.destroy')
Route.get('/admin/lowongan/edit/:lowongan_id', 'AdminLowonganController.edit')
Route.put('/admin/lowongan/', 'AdminLowonganController.update')
/*

*/


Route.get('/admin/lowongan/', 'AdminLowonganController.show');

Route.get('/api/server', 'AdminUsersController.server');
