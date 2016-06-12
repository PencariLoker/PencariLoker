<template>

	<navbar></navbar>
	<div id="page-wrapper">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Add New User</h1>
				<a v-link="{ path: '/' }">Go to List Users</a>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label for="">Username</label>
					<input type="text" name="username" id="input" class="form-control" value="" required="required" placeholder="Username" v-model="username">
				</div>
				<div class="form-group">
					<label for="">Name</label>
					<input type="text" name="name" id="inputName" class="form-control" value="" placeholder="Name" v-model="name">
				</div>
				<div class="form-group">
					<label for="">Email</label>
					<input type="email" name="email" id="inputEmail" class="form-control" value="" required="required" placeholder="Email" v-model="email">
				</div>
				<div class="form-group">
					<label for="">Password</label>
					<input type="password" name="password" id="inputPassword" class="form-control" required="required" placeholder="Password" v-model="password">
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<div class="checkbox">
						<label>
							<input type="checkbox" v-model="active">
							Active
						</label>
						<label>
							<input type="checkbox" v-model="isAdmin">
							Administrator ?
						</label>
					</div>
				</div>
			</div>
		</div>

		<!-- Submit Button -->
		<div class="row">
			<div class="col-md-12">
				<button type="button" class="btn btn-primary" @click="save">Simpan</button>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		ready: function(){

		},
		data () {
		  return {
		    username: '',
		    name : '',
		    email : '',
		    password : '',
		    active : '',
		    isAdmin : '',
		  };
		},
		methods: {
		  save () {
		  	var data = {
		  		_csrf : $('meta[name=csrf]').attr('content'),
		  		username : this.username,
				name : this.name,
				password : this.password,
				email : this.email,
				active : this.active, 
				admin : this.isAdmin,
			}
			$.ajax({
				url : window.location.origin + "/admin/users/add",
				method : 'POST',
				async : false,
				data : data,
				success : function(res){
					console.log(res);
				}
			});
		  }
		}
	}
</script>