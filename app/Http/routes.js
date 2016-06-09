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
Route.get('/admin/company', 'AdminCompanyController.index')

