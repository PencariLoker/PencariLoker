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
              <input type="url" name="url" id="inputUrl" class="form-control" placeholder="http://yourcompany.com" v-model="company.website" v-validate:companyurl="['required']">
              <span v-if="$validation.companyurl.touched && $validation.companyurl.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
            </div>
            <div class="form-group has-feedback">
              <label for="">Email</label>
              <input type="email" name="email" id="email" v-model="company.email" placeholder="Email" class="form-control" v-validate:companyemail="['required']">
              <span v-if="$validation.companyemail.touched && $validation.companyemail.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
            </div>

            <div class="form-group">
              <label for="">Logo</label>
              <input type="file" name="logo" id="" class="form-control" @change="changeLogo">
              <p v-if="mediaonUpload">on upload.....</p>
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
      changeLogo: function(e){
        var target = e.target;
        var tmpFile = target.files[0];
        var reader  = new FileReader();
        var self = this;
        this.mediaonUpload = true
        reader.addEventListener('load', function(){
          self.company.logo = reader.result;
          self.company.logo_changed = true;
          self.mediaonUpload = false;
        })
        reader.readAsDataURL(tmpFile);
      },
      updatecompany: function(){
        var utils = new Utils;
        this.company.address = $("textarea[name=address").val();
        var self = this;
        var data = this.company;
        utils.updateCompany(data, function(e){
          if (e.status == 'ok'){
            console.log(e);
            self.$router.go('/company');
          }
        });
      }
    },
    components:{
      navbar: Navbar
    }
  }
</script>
