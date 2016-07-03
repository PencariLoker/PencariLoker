<style>
  .text-error{
    color:red;
    font-size: 11px;
  }
</style>
<template>
	<navbar></navbar>
	<modal></modal>
	<div class="container content">
		<div class="col-lg-12 col-xs-12 col-sm-12 col-md-6" style="margin:0 auto;">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3>Edit Profile</h3>
				</div>
        <validator name="validation">
  				<div class="panel-body">
  					<div class="form-group">
  						<img style="margin:0 auto;height:300px;width:auto;" v-bind:src="pictureUrls" class="img-responsive" alt="Image">
  						<!-- <input style="margin:0 auto;" type="file" accept="image/*" name="fotouser" value="" placeholder=""> -->
  					</div>
  					<div class="form-group has-feedback">
  						<label>Name</label>
  						<input placeholder="Name" name="name" v-model="formattedName" class="inputkecil form-control" v-validate:nama="['required']" detect-change="off" detect-blur="off">
              <span v-if="$validation.nama.touched && $validation.nama.required" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span >
              <p class="text-error" v-if="$validation.nama.touched && $validation.nama.required">Name required</p>
  					</div>
  					<div class="form-group">
  						<label>Email</label>
  						<p class="inputkecil form-control" style="background:#DDD;">{{ emailAddress }}</p>
  					</div>
  					<div class="form-group">
  						<label>Gender</label>
  						<select name="gender" v-model="gender" id="input" class="form-control" required="required" v-validate:gender="['required']">
  							<option selected value="0" >Male</option>
  							<option value="1">Female</option>
  						</select>
  					</div>
  					<div class="form-group">
  						<label>address</label>
  						<textarea v-model="address" name="alamat" id="input" class="form-control" rows="3" required="required" v-validate:address="['required']">{{ address }}</textarea>
              <p class="text-error" v-if="$validation.address.touched && $validation.address.required">Address required</p>
  					</div>
  					<div class="form-group">
  						<label>City</label>
  						<textarea name="kota" id="input" class="form-control" rows="1" required="required" v-model="city" v-validate:city="['required']">{{ city }}</textarea>
              <p class="text-error" v-if="$validation.city.touched && $validation.city.required">CIty required</p>
  					</div>
  					<div class="form-group">
  						<label>Birthdate</label>
  						<input style="width:160px;" type="date" name="dob" id="tanggal" class="form-control" v-model="birthdate" required="required" title="" v-validate:birthdate="['required']">
              <p class="text-error" v-if="$validation.birthdate.touched && $validation.birthdate.required">Birthdate required</p>
  					</div>
  					<div class="form-group">
  						<label>Phone</label>
  						<input type="text" name="telepon" id="tanggal" class="form-control" v-model="phone" required="required" title="" v-validate:phone="['required', 'phone']">
              <p class="text-error" v-if="$validation.phone.touched && $validation.phone.required">Phone Required</p>
              <p class="text-error" v-if="!$validation.phone.required && $validation.phone.phone">Phone Invalid (ex.082276121190)</p>
  					</div>
  					<div class="form-group">
  						<label>Upload A File ( CV / Resume / Portfolio ) in .pdf</label>
  						<p v-if="!cvurl">CV not uploaded yet</p>
              <br>
              <a v-bind:href="urlTOCv()" target="_new" v-if="cvurl">{{cvurl}}</a>
  						<input type="file" name="lampiran" accept=".pdf" value="" placeholder="" @change="addCV">
              <p  v-if="uploading">Uploading..</p>
  					</div>
  					<button type="submit" class="btn btn-primary" @click="add">Submit</button>
  				</div>
        </validator>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	Vue.component('navbar', require('./_navbar.vue'));
	Vue.component('modal', require('./_modal.vue'));
  var VueValidator = require('vue-validator')
  Vue.use(VueValidator);

  Vue.validator('phone', function(val){
    return  /^08[0-9]{9,10}$/.test(val);
  });

  var Profile = require('../ProfileLib');
	export default {
		ready: function () {
			console.log("Pro Rready");
			var _this = this;
            $.ajax({
                method : 'GET',
                async : false,
                cache : false,
                'url' : window.location.origin + "/profile/data",
                success : function(res){
                    _this.city = res.city || "";
                    _this.pictureUrls = res.photo_url;
                    _this.formattedName = res.formattedName || res.name;
                    _this.emailAddress = res.emailAddress || res.email;
                    _this.address = res.address;
                    _this.gender = res.gender;
                    _this.birthdate = res.birthdate;
                    _this.phone = res.phone;
                    _this.cvurl = res.cvurl;
                }.bind(_this)
            });
		},
        data: function(){
            return {
                user : {},
                formattedName:'',
                emailAddress:'',
                city:'',
                pictureUrls:'',
                name:'',
                address:'',
                gender:0,
                birthdate:'',
                phone:'',
                cvurl : '',
                uploading : false
            }
        },
        methods: {
          urlTOCv: function(){
            return window.location.origin + '/profile/viewCV/' + this.cvurl;
          },
          _save: function(){
            var arr = {
              name : this.formattedName,
              city : this.city,
              phone : this.phone,
              gender : this.gender,
              birthdate : this.birthdate,
              address: this.address,
              cvurl : this.cvurl,

            }
            var person = new Profile;
            var self = this;
            person.save(arr, function(e){
              if (e.status === 'ok'){
                swal('Good job!','You clicked the button!','success')
              }
            })
          },
          addCV: function(e){
            var fd = new FormData;
            var person = new Profile;

            var target = e.target;
            var tmpFile = target.files[0];

            fd.append("filegambar", tmpFile);
            var self = this;
            person.uploadCV(fd,function(e){
              console.log(e);
              self.cvurl = e.filename;
            })
          },
    			add: function(e){
            var self = this;
            this.$validate(true, function () {
              if (self.$validation.invalid) {
                console.log("error Mas");
                e.preventDefault()
                return;
              }
              else{
                self._save();
              }
            });
    			}
	     }
	 }
</script>
