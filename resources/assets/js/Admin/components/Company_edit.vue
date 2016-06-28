<style type="text/css">
  .text-error {
    color:red;
    font-size:11px;
  }
</style>
<template>
  <navbar></navbar>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-md-12">
        <h1 class="page-header">Edit Company</h1>
      </div>
    </div>

    <validator name="validation">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-6">
            <div class="form-group has-feedback">
              <label for="">Name</label>
              <input type="text" name="name" id="inputName" class="form-control" placeholder="Name" v-model="company.name" v-validate:companyname="['required']" detect-change="off" detect-blur="off">
              <span v-if="$validation.companyname.touched && $validation.companyname.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
            </div>
            <div class="form-group has-feedback">
              <label for="">Indsutry</label>
              <input type="text" id="input" class="form-control" placeholder="Indsutry" v-model="company.industry" v-validate:companyindustry="['required']">
              <span v-if="$validation.companyindustry.touched && $validation.companyindustry.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
            </div>
            <div class="form-group has-feedback">
              <label for="">Website</label>
              <input type="url" name="url" id="inputUrl" class="form-control" placeholder="http://yourcompany.com" v-model="company.website" v-validate:companyurl="['required', 'http']">
              <span v-if="$validation.companyurl.touched && $validation.companyurl.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
              <p class="text-error" v-show="$validation.companyurl.http">Invalid URL.</p>
            </div>
            <div class="form-group has-feedback">
              <label for="">Email</label>
              <input type="email" name="email" id="email" v-model="company.email" placeholder="Email" class="form-control" v-validate:companyemail="['required', 'email']">
              <span v-if="$validation.companyemail.touched && $validation.companyemail.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
              <p class="text-error" v-show="$validation.companyemail.email">Invalid your mail address format.</p>
            </div>

            <div class="form-group">
              <label for="upload3" style="width: 100%;">
                  <span class="btn btn-primary">
                    <i class="fa fa-plus"></i> Change Logo
                  </span>
                  <input type="file" class="hidden" id="upload3" accept="image/*" @change="changeLogo">
              </label>
              <p v-if="mediaonUpload">on upload.....</p>
            </div>

            <div class="form-group">
              <img v-bind:src="getImage(company.logo)" class="img-responsive" v-if="company.logo">
            </div>
          </div>

          <!-- Second Form -->
          <div class="col-md-6">
             <div class="form-group has-feedback">
              <label for="">Phone</label>
              <input type="text" name="" id="input" class="form-control" value="" v-model="company.phone" placeholder="Phone" v-validate:companyphone="['required']">
              <span v-if="$validation.companyphone.touched && $validation.companyphone.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
            </div>
            <div class="form-group has-feedback">
              <label for="">Size</label>
              <input type="text" name="size" id="inputSize" class="form-control" placeholder="Size" v-model='company.size' v-validate:companysize="['required']">
              <span v-if="$validation.companysize.touched && $validation.companysize.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
            </div>
            <div class="form-group has-feedback">
              <label for="">Address</label>
              <textarea name="address" class="form-control" placeholder="Address" v-model="company.address"></textarea v-validate:companysize="['required']">
              <span v-if="$validation.companysize.touched && $validation.companysize.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
            </div>
          </div>
          <!-- End Form -->
        </div>
      </div> <!-- end row -->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <a href="#" v-link="{path:'/company'}" class="btn btn-danger" style="margin-left:15px;">Cancel</a>
          <button type="button" class="btn btn-primary" style="" @click="updatecompany">Update</button>
        </div>
      </div>
    </validator>
  </div>
</template>


<script type="text/javascript">
  var Navbar = require('./_navbar.vue');
  var Utils = require('../Utils').Utils;
  var summernote = require('summernote');
  var VueValidator = require('vue-validator')
  Vue.use(VueValidator);
  require('../Validator');
  var path = require('path');

  export default {
    ready: function(){
      var utils = new Utils;
      var self = this;
      var data = {
        'id' : this.$route.params.companyId,
      }
      utils.getCompany(data, function(e){
        self.company = e.data;
        $("textarea[name=address").summernote('code', e.data.address);
        console.log(self.company.logo);
        self.company.logo_changed = false;
      });
    },
    data: function(){
      return {
        company: [],
        mediaonUpload : false,
      }
    },
    methods: {
      getImage: function(e){
        return window.location.origin + '/' + path.join('img', e);
      },
      changeLogo: function(e){
        var target = e.target;
        var tmpFile = target.files[0];
        var fd = new FormData;
        var self = this;
        var handle = function(e){
          self.company.logo = e.data;
          console.log(e);
        }
        fd.append("CustomField", "This is some extra data");
        fd.append("filegambar", tmpFile);
        $.ajax({
          url: window.location.origin + '/api/image',
          type: "POST",
          data: fd,
          processData: false,  // tell jQuery not to process the data
          contentType: false,   // tell jQuery not to set contentType
          success: function(e){
            handle(e);
          }
        });
      },
      updatecompany: function(e){
        var self = this
        this.$validate(true, function () {
          if (self.$validation.invalid) {
            e.preventDefault()
            return;
          }
          else{
            var utils = new Utils;
            self.company.address = $("textarea[name=address").val();
            var data = self.company;
            utils.updateCompany(data, function(e){
              if (e.status == 'ok'){
                console.log(e);
                self.$router.go('/company');
              }
            });
          }
        });
      }
    },
    components:{
      navbar: Navbar
    }
  }
</script>
