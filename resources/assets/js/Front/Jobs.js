window.Vue = require('vue');
window.$ = window.jQuery = require('jquery');
Vue.config.debug = true;
var Jobs = require('./components/Jobs.vue');	
new Vue({
	ready: function () {
		console.log("Jobs Ready")
	},
	el: "body",
	components:{
		jobs: Jobs
	}
})