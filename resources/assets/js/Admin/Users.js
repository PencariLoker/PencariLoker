
window.Vue = require('vue');
var VueRouter = require('vue-router')
window.$ = window.jQuery = require('jquery');
Vue.config.debug = true;
var Home = require('./components/Home.vue');
var Users = require('./components/Users.vue');
var Users_Add = require('./components/Users_add.vue');
var Company_List = require('./components/Company_list.vue');
var Company_Add = require('./components/Company_add.vue');
var App = Vue.extend({})
var router = new VueRouter()
router.map({
    '/' : {
        component : Home,
    },
    '/user': {
        component: Users
    },
    '/company': {
        component: Company_List,
    },
    '/company/add' : {
        component: Company_Add, 
    }
})
router.start(App, '#app')