<template>
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
				<label for="">Username</label>
				<input type="text" class="form-control" id="username" placeholder="Username">
			</div>
			<div class="form-group">
				<label for="">Name</label>
				<input type="text" class="form-control" id="username" placeholder="Name" v-model=name>
			</div>
			<div class="form-group">
				<label for="">Email</label>
				<input type="email" class="form-control" id="username" placeholder="Email" v-model="email">
			</div>
			<div class="form-group">
				<label for="">Password</label>
				<input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password">
			</div>
			<div class="form-group">
				<div class="checkbox">
					<label>
						<input type="checkbox" v-model="active">
						Active
					</label>
					<label>
						<input type="checkbox" v-model="admin">
						Administrator ?
					</label>
				</div>
			</div>
			<button type="button" class="btn btn-primary" @click="add">Submit</button>
			<button type="button" class="btn btn-danger" @click="back">Back</button>
		</div>
	</div>
</template>


<script type="text/javascript">
	export default {
		ready: function(){
			console.log("Add Form Users")
		}, 
		data: function(){
			return {
				name : '',
				email : '',
				password : '',
				active : '',
				admin : '',
			}
		},
		methods: {
			add: function(){
				var data = {
					_csrf : $('meta[name=csrf]').attr('content'),
					name : this.name,
					password : this.password,
					email : this.email,
					active : this.active, 
					admin : this.admin,
				}
				$.ajax({
					url : window.location.origin + "/admin/users/add",
					method : 'POST',
					async : false,
					data : data,
					success : function(res){
						console.log(res);
					}
				})
			},
			back: function(){
				this.$dispatch('change_mode', 'list', 'Users')
			}
		}
	}
</script>