<template>
	<navbar></navbar>
	<modal></modal>
	<div class="container content">
		<div class="col-lg-12 col-xs-12 col-sm-12 col-md-6" style="margin:0 auto;">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3>Edit Profile</h3>
				</div>
				<div class="panel-body">
					<div class="form-group">
						<img style="margin:0 auto;height:300px;width:auto;" v-bind:src="pictureUrls" class="img-responsive" alt="Image">
						<input style="margin:0 auto;" type="file" accept="image/*" name="fotouser" value="" placeholder="">
					</div>
					<div class="form-group">
						<label>Name</label>
						<input placeholder="Name" name="name" v-model="formattedName" class="inputkecil form-control">
					</div>
					<div class="form-group">
						<label>Email</label>
						<p class="inputkecil form-control" style="background:#DDD;">{{ emailAddress }}</p>
					</div>
					<div class="form-group">
						<label>Gender</label>
						<select name="gender" v-model="gender" id="input" class="form-control" required="required">
							<option selected value="0" >Male</option>
							<option value="1">Female</option>
						</select>
					</div>
					<div class="form-group">
						<label>address</label>
						<textarea v-model="address" name="alamat" id="input" class="form-control" rows="3" required="required">{{ address }}</textarea>
					</div>
					<div class="form-group">
						<label>City</label>
						<textarea name="kota" id="input" class="form-control" rows="1" required="required" v-model="city">{{ city }}</textarea>
					</div>
					<div class="form-group">
						<label>Birthdate</label>
						<input style="width:160px;" type="date" name="dob" id="tanggal" class="form-control" v-model="birthdate" required="required" title="">
					</div>
					<div class="form-group">
						<label>Phone</label>
						<input type="text" name="telepon" id="tanggal" class="form-control" v-model="phone" required="required" title="">
					</div>
					<div class="form-group">
						<label>Upload A File ( CV / Resume / Portfolio ) in .pdf</label>
						<p>CV not uploaded yet</p>
						<input type="file" name="lampiran" accept=".pdf" value="" placeholder="">
					</div>
					<button type="submit" class="btn btn-primary" @click="add">Submit</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	Vue.component('navbar', require('./_navbar.vue'));
	Vue.component('modal', require('./_modal.vue'));
	export default {
		ready: function () {
			console.log("Pro Rready");
			var _this = this;
            $.ajax({
                method : 'GET',
                async : false,
                cache : false,
                'url' : window.location.origin + "/data",
                success : function(res){
                    _this.user = res;
                    _this.city = res.city || res.location.name;
                    _this.pictureUrls = res.photo_url || res.pictureUrls.values[0];
                    _this.formattedName = res.formattedName || res.name;
                    _this.emailAddress = res.emailAddress || res.email;
                    _this.address = res.address;
                    _this.gender = res.gender || 0;
                    _this.birthdate = res.birthdate;
                    _this.phone = res.phone;
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
                phone:''
            }
        },
        methods: {
			add: function(){
				var data = {
					_csrf : $('meta[name=csrf]').attr('content'),
					linkedin_id: this.user.linkedin_id || this.user.id,
					name : this.formattedName,
					email : this.emailAddress,
	                phone: this.phone,
	                birthday: this.birthdate,
	                photo_url:this.pictureUrls,
					address: this.address,
					city: this.city,
	                gender: this.gender
				}
				$.ajax({
					url : window.location.origin + "/ninja/addUser",
					method : 'POST',
					async : false,
					data : data,
					success : function(res){
						if (res.redirect) {
			                window.location.href = window.location.origin + res.redirect;
			            }
			            else {
			            	console.log("ok");
			                // Process the expected results...
			            }
					}
				})
			}
		}
	}
</script>