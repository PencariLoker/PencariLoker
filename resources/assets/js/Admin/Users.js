
window.Vue = require('vue');
var VueRouter = require('vue-router')
window.$ = window.jQuery = require('jquery');
require('bootstrap');
window.Lowongan = require('./lib/Lowongan')
Vue.config.debug = true;
var Home = require('./components/Home.vue');
var Users = require('./components/Users.vue');
var Users_Add = require('./components/Users_add.vue');
var Company_List = require('./components/Company_list.vue');
var Company_Add = require('./components/Company_add.vue');
var Company_Edit = require('./components/Company_edit.vue');

var Category = require('./components/Category.vue');

// Lowoongan
var Lowongan_Add = require('./components/Lowongan_add.vue');
var Lowongan_Edit = require('./components/Lowongan_edit.vue');

var App = Vue.extend({})
var router = new VueRouter({})
router.map({
    '/' : {
        component : Home,
    },
    '/category' : {
      component : Category,
    },
    '/company': {
        component: Company_List,
    },
    '/company/add' : {
        component: Company_Add,
    },
    '/company/edit/:companyId' :{
        component: Company_Edit,
    },
    'lowongan': {
      component : require('./components/Lowongan.vue'),
    },
    '/lowongan/add' : {
      component : Lowongan_Add,
    },
    '/lowongan/edit/:lowonganId': {
      component : Lowongan_Edit,
    },
    '/salary':{
      component: require('./components/Salary.vue'),
    },
    '/user': {
        component: Users
    },
})
router.start(App, '#app')
