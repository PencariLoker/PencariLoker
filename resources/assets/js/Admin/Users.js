
window.Vue = require('vue');
var VueRouter = require('vue-router')
window.$ = window.jQuery = require('jquery');
Vue.config.debug = true;
var Home = require('./components/Home.vue');
var Users = require('./components/Users.vue');
var Users_Add = require('./components/Users_add.vue');
var Company_List = require('./components/Company_list.vue');
var Company_Add = require('./components/Company_add.vue');


// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend({})

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
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

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')