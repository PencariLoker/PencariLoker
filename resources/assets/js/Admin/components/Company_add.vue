<style>
  #maps{
    width: 100%;
    height: 200px;
  }
</style>
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
  						<input type="url" name="url" id="inputUrl" class="form-control" placeholder="http://yourcompany.com" v-model="company.website" v-validate:companyurl="['required', 'http']">
              <span v-if="$validation.companyurl.touched && $validation.companyurl.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
              <p class="text-error" v-show="!$validation.companyurl.required && $validation.companyurl.http">Invalid URL.</p>
  					</div>
            <div class="form-group has-feedback">
              <label for="">Email</label>
              <input type="email" name="email" id="email" v-model="company.email" placeholder="you@company.tld" class="form-control" v-validate:companyemail="['required', 'email']">
              <span v-if="$validation.companyemail.touched && $validation.companyemail.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
              <p class="text-error" v-show="!$validation.companyemail.required &&$validation.companyemail.email">Invalid your mail address format.</p>
            </div>
  					<div class="form-group">
              <label for="upload3" style="width: 100%;">
                  <span class="btn btn-primary">
                    <i class="fa fa-plus"></i> Add or Change Logo
                  </span>
                  <input type="file" class="hidden" id="upload3" accept="image/*" v-on:change="addLogo">
              </label>
            </div>
            <div class="form-group">
              <img v-bind:src="getImage(company.logo)" class="img-responsive" v-if="company.logo">
            </div>
            <div class="form-group">
              <label for="">Maps</label>
              <div id="maps">

              </div>
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
  require('../Validator');
  var summernote = require('summernote');
  var path = require('path');
	export default {
    created: function(){
    },
		ready: function(){
			$('title').text('Add Company');
      $('textarea[name=address]').summernote();
      this._initMaps();
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
          lat: '',
          lng : '',
        }
      }
    },
    methods:{
      _initMaps: function(e){
        var self = this;
        var map;
        var myLatLng = {lat: 3.590595, lng: 98.6762443};
        self.company.lat = myLatLng.lat;
        self.company.lng = myLatLng.lng;
        map = new google.maps.Map(document.getElementById('maps'), {
          center: myLatLng,
          zoom: 14,
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Click Me!!',
          draggable : true,
        });

        marker.addListener('drag', function(e){
           var location = e.latLng;
           self.company.lat = location.lat();
           self.company.lng = location.lng();
        })
      },
      addLogo: function(e){
        var target = e.target;
        var tmpFile = target.files[0];
        var fd = new FormData;
        var self = this;
        var handle = function(e){
          self.company.logo = e.data;
          console.log(e, self.company.logo);
        }
        fd.append("filegambar", tmpFile);
        $.ajax({
          url: window.location.origin + '/api/image',
          type: "POST",
          data: fd, // Form Data
          processData: false,  // tell jQuery not to process the data
          contentType: false,   // tell jQuery not to set contentType
          success: function(e){
            handle(e);
          }
        });
      },
      getImage: function(e){
        return window.location.origin + '/' + path.join('img', e);
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
