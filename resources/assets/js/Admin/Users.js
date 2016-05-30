window.Vue = require('vue');
window.$ = window.jQuery = require('jquery');
Vue.config.debug = true;
var Users = require('./components/Users.vue');
new Vue({
	ready: function () {
		console.log("Admin Users Ready")
	},
	el: "body",
	components:{
		users: Users,
	}
})