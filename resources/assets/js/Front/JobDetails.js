window.Vue = require('vue');
window.$ = window.jQuery = require('jquery');
Vue.config.debug = true;
var JobDetails = require('./components/JobDetails.vue');
new Vue({
  ready: function () {
    console.log("Job Details Ready")
  },
  el: "body",
  components:{
    jobdetails: JobDetails,
  }
})
