window.$ = window.jQuery = require('jquery');
require('bootstrap');
window.Vue = require('vue');
Vue.use(require('vue-validator'));
require('./Validator');

$(function () {
  $.ajaxSetup({
    headers: {
            'X-XSRF-TOKEN': $('meta[name=csrf]').attr('content')
    }
  });
});

new Vue({
  el: "body",
  ready: function(){

  },
  data: function(){
    return {
      email : '',
      password : '',
      on :{
        error : false,
        INVALID_LOGIN: false,
      }
    }
  },
  methods:{
    login : function(e){
      var self = this
      this.$validate(true, function () {
        if (self.$validation.invalid) {
          e.preventDefault()
          return;
        }
        else{
          var onT = self.on;
          onT.error  =  onT.INVALID_LOGIN = false;
          var data = {
            email : self.email,
            password : self.password
          }
          var handle = function(e){
            if (e.status === 'error'){
              onT.error = true;
              return;
            }

            if (e.status == 'INVALID_LOGIN'){
              onT.INVALID_LOGIN = true;
              return;
            }
          }
          $.ajax({
            async: true,
            data: data,
            url : window.location.origin + '/admin/login',
            method : 'POST',
            error: function(e){
              handle({'status' : 'error'});
            },
            success: function(e){
              handle(e)
            }
          })
        }
      });
    }
  }
})
