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
Route.get('/tester', 'HomeController.home');
Route.get('/test', 'HomeController.test');

//test API
Route.get('/oauth/linkedin', 'AuthController.authentication');
Route.get('/authentication', 'AuthController.accessToken');