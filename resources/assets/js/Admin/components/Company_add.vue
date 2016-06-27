<template>
	<navbar></navbar>
	<div id="page-wrapper">
		<div class="row">
			<div class="col-lg-12 col-sm-12 col-md-12">
				<h1 class="page-header">Add Company</h1>
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
              <input type="file" class="form-control" placeholder="Logo" id="logo" @change="addLogo">
            </div>
            <div class="form-group">
              <p>
                <b>Uploading....</b>
              </p>
              <img src="#" class="img-responsive" alt="Image">
            </div>
  				</div>
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
  			</div>
  		</div>
  		<div class="row">
  			<div class="col-md-6 col-sm-12">
  				<a href="#" v-link="{path:'/company'}" class="btn btn-danger" style="margin-left:15px;">Cancel</a>
  				<button type="button" class="btn btn-primary" style="" @click="savecompany">Save</button>
  			</div>
  		</div>
    </validator>
	</div>
</template>


<script type="text/javascript">
	var Navbar = require('./_navbar.vue');
  var VueValidator = require('vue-validator')
  var Utils = require('../Utils').Utils;
  Vue.use(VueValidator);
  var summernote = require('summernote');
	export default {
    created: function(){
    },
		ready: function(){
			$('title').text('Add Company');
      $('textarea[name=address]').summernote();
		},
    data () {
      return {
        company : {
          name : '',
          industry : '',
          size : '',
          website : '',
          email : '',
          address: '',
          phone : '',
          logo : '',
        }
      }
    },
    methods:{
      addLogo: function(e){
        var target = e.target;
        var tmpFile = target.files[0];
        var fd = new FormData;
        var self = this;
        var handle = function(e){
          self.company.logo = e.data;
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
      savecompany: function(e){
        var self = this
        this.$validate(true, function () {
          if (self.$validation.invalid) {
            e.preventDefault()
            return;
          }
          else{
            self.company['_csrf'] = $('meta[name=csrf]').attr('content');
            self.company['address'] = $('textarea[name=address]').val();
            var arr = self.company;
            var utils = new Utils;

            utils.postCompany(arr, function(e){
              console.log(e);
              self.$router.go('/company');
            })
          }
        });
      }
    },
		components:{
			navbar: Navbar
		}
	}
</script>
