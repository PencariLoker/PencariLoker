window.Vue = require('vue');
window.$ = window.jQuery = require('jquery');
Vue.config.debug = true;

var Company = require('./components/Company.vue');
new Vue({
	ready: function () {
		console.log("Company Ready")
	},
	el: "body",
	components:{
		company: Company,
	},
})