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
Route.get('/profile', 'HomeController.profile');
Route.get('/profile/data', 'HomeController.profiledata');
Route.post('/profile/data', 'HomeController.saveprofile');
Route.post('/profile/uploadCV', 'HomeController.uploadCV');
Route.get('/profile/viewCV/:filename', 'HomeController.viewPDF');

Route.post('/filterData', 'HomeController.filterData')

Route.get('/jobsInit', 'HomeController.jobsInit');

Route.get('/data', 'HomeController.userSession');
Route.get('/oauth/linkedin', 'AuthController.authentication');
Route.get('/authentication', 'AuthController.accessToken');
Route.get('logout', 'AuthController.logout');

Route.on('/admin').render('backend.Users').middleware('admin')
Route.get('/admin/users', 'AdminUsersController.index').middleware('admin')
Route.post('/admin/users/add', 'AdminUsersController.addUser').middleware('admin')
Route.get('/admin/users/list', 'AdminUsersController.list').middleware('admin')


Route.post('/admin/company/add', 'AdminCompanyController.store').middleware('admin');
Route.get('/admin/company/edit/:companyId', 'AdminCompanyController.edit').middleware('admin');
Route.get('/admin/company/list', 'AdminCompanyController.show').middleware('admin');
Route.put('/admin/company/edit/', 'AdminCompanyController.update').middleware('admin');
Route.delete('/admin/company/delete', 'AdminCompanyController.destroy').middleware('admin')



// Category
Route.get('/admin/category/list', 'AdminCategoryJobsController.show').middleware('admin');
Route.post('admin/category', 'AdminCategoryJobsController.add').middleware('admin');
Route.delete('/admin/category', 'AdminCategoryJobsController.delete').middleware('admin');

Route.post('/api/image', 'ImageController.index');

//Lowongan
Route.post('/admin/lowongan/add', 'AdminLowonganController.store').middleware('admin')
Route.get('/admin/lowongan/', 'AdminLowonganController.show').middleware('admin')
Route.delete('/admin/lowongan/', 'AdminLowonganController.destroy').middleware('admin')
Route.get('/admin/lowongan/edit/:lowongan_id', 'AdminLowonganController.edit').middleware('admin')
Route.put('/admin/lowongan/', 'AdminLowonganController.update').middleware('admin')
/*

*/


Route.get('/admin/lowongan/', 'AdminLowonganController.show').middleware('admin');

Route.get('/api/server', 'AdminUsersController.server').middleware('admin');

Route.get('/admin/login', 'AdminLoginController.index');
Route.post('/admin/login', 'AdminLoginController.login');
