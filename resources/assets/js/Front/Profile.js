window.Vue = require('vue');
window.$ = window.jQuery = require('jquery');
Vue.config.debug = true;
var Profile = require('./components/Profile.vue');	
new Vue({
	ready: function () {
		console.log("Profile Ready")
	},
	el: "body",
	components:{
		profile: Profile,
	}
})