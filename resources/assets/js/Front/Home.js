window.Vue = require('vue');
window.$ = window.jQuery = require('jquery');
Vue.config.debug = true;
var Home = require('./components/Home.vue');	
new Vue({
	ready: function () {
		console.log("HomePage Ready")
	},
	el: "body",
	components:{
		home: Home,
	}
})