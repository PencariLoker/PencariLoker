'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Routes helps you in defining http endpoints/urls which will be used
| by outside world to interact with your application. Adonis has a
| lean and rich router to support various options out of the box.
|
*/
const Route = use('Route')

Route.get('/', 'HomeController.index');
Route.get('/jobdetails/:id', 'HomeController.jobdetails').as('jobdetails')
Route.get('/jobs', 'HomeController.jobs').as('jobs')
Route.get('/jobsInit', 'JobsController.firstInitData')
Route.get('/getJobDetails', 'JobsController.getJobDetails')
Route.post('/filterData', 'JobsController.filterData')
Route.post('/getPage', 'JobsController.getPage')
Route.get('/tester', 'HomeController.home');
Route.get('/test', 'HomeController.test');
Route.get('/profile','HomeController.profile');

Route.get('/oauth/linkedin', 'AuthController.authentication');
Route.get('/authentication', 'AuthController.accessToken');
Route.get('/logout', 'AuthController.logout').as('logout');
Route.get('/data', 'AuthController.data');
Route.get('/checkDatabase', 'AuthController.checkDatabase');
Route.get('/share','AuthController.share');
Route.get('/share2','AuthController.share2');

Route.get('/ninja/user', 'AdminUsersController.index')
Route.post('/ninja/addUser', 'AdminUsersController.addUser').as('addUser')

Route.get('/admin/users', 'AdminUsersController.index')
Route.post('/admin/users/add', 'AdminUsersController.addUser')
Route.get('/admin/users/list', 'AdminUsersController.list')

// Category
Route.get('/admin/category/list', 'AdminCategoryJobsController.show');
Route.post('/admin/category/add', 'AdminCategoryJobsController.store');

// Admin Company
Route.post('/admin/company/add', 'AdminCompanyController.store');
Route.get('/admin/company/list', 'AdminCompanyController.show')
Route.get('/admin/company/edit/:companyId', 'AdminCompanyController.edit');
Route.put('/admin/company/edit/', 'AdminCompanyController.update');
Route.delete('/admin/company/delete', 'AdminCompanyController.destroy')

//Lowongan
Route.post('/admin/lowongan/add', 'AdminLowonganController.store')
Route.get('/admin/lowongan/', 'AdminLowonganController.show')
Route.get('/admin/lowongan/edit/:lowongan_id', 'AdminLowonganController.edit')
Route.delete('/admin/lowongan/', 'AdminLowonganController.destroy')
Route.put('/admin/lowongan/', 'AdminLowonganController.update')


Route.post('/admin/salary/add', 'AdminSalaryController.store');
Route.get('/admin/salary/', 'AdminSalaryController.show');
Route.delete('/admin/salary/delete', 'AdminSalaryController.destroy')


// ServerAPI
Route.get('/api/server', 'AdminUsersController.server');
Route.get('/api/company', 'AdminUsersController.company')
Route.get('/api/image', 'ImageController.index').middlewares(['auth']);
Route.post('/api/image', 'ImageController.index');

//Image Uploader


// APi Google Shortner
Route.get('/short', 'ApiShortController.index');

// Login
//
Route.get('/admin/login', 'AdminLoginController.index');
Route.post('/admin/login', 'AdminLoginController.login');
Route.get('/admin/logout', 'AdminLoginController.logout');
