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
Route.get('/logout', 'AuthController.logout').as('logout');
Route.get('/tester', 'HomeController.home');
Route.get('/test', 'HomeController.test');

Route.get('/oauth/linkedin', 'AuthController.authentication');
Route.get('/authentication', 'AuthController.accessToken')

Route.get('/ninja/user', 'AdminUserController.index')
Route.post('/ninja/user', 'AdminUserController.addUser')
