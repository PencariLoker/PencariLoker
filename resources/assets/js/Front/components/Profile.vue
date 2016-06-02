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
						<img style="margin:0 auto;height:300px;width:auto;" v-bind:src="user.pictureUrls.values[0]" class="img-responsive" alt="Image">
						<input style="margin:0 auto;" type="file" accept="image/*" name="fotouser" value="" placeholder="">
					</div>
					<div class="form-group">
						<label>Name</label>
						<input placeholder="Name" name="name" v-model="user.formattedName" class="inputkecil form-control">
					</div>
					<div class="form-group">
						<label>Email</label>
						<p class="inputkecil form-control" style="background:#DDD;">{{ user.emailAddress }}</p>
					</div>
					<div class="form-group">
						<label>Gender</label>
						<select name="gender" id="input" class="form-control" required="required">
							<option selected value="0" v-model="gender">Male</option>
							<option value="1" v-model="gender">Female</option>
						</select>
					</div>
					<div class="form-group">
						<label>Address</label>
						<textarea name="alamat" id="input" class="form-control" rows="3" required="required"></textarea>
					</div>
					<div class="form-group">
						<label>City</label>
						<textarea name="kota" id="input" class="form-control" rows="1" required="required" v-model="user.location.name">{{ user.location.name }}</textarea>
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
                }.bind(_this)
            });
		},
        data: function(){
            return {
                user : {},
                address:'',
                gender:0,
                birthdate:'',
                phone:''
            }
        },
        methods: {
			add: function(){
				var data = this.user
				data.user = {}
	            data.address=''
	            data.gender=0
	            data.birthdate=''
	            data.phone=''
	            console.log(data);
				$.ajax({
					url : window.location.origin + "/admin/users/add",
					method : 'POST',
					async : false,
					data : data,
					success : function(res){
						console.log(res);
					}
				})
			}
		}
	}
</script>