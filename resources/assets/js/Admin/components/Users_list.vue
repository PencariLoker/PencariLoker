<template>
<div class="row">
	<div class="col-lg-12">
		<a href="#" @click="addnewusers" class="btn btn primary"><i class="fa fa-plus"></i> Add New Users</a>
		<div class="panel panel-default">
			<div class="panel-heading">
				List Users
			</div>
			<div class="panel-body">
				<div class="table-responsive">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Name</th>
								<th>Username</th>
								<th>Email</th>
								<th>Active</th>
								<th>Admin</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in arr">
								<td>{{item.name}}</td>
								<td>not Available</td>
								<td>{{item.email}}</td>
								<td>Yes</td>
								<td>Yes</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
</template>


<script>
	export default {
		ready: function () {
			console.log("Ready");
			var _this = this;
			$.ajax({
				method : 'GET',
				async : false,
				cache : false,
				'url' : window.location.origin + "/admin/users/list",
				success : function(res){
					_this.arr = res;
				}.bind(_this)
			});
			console.log(this.arr);
		},
		data: function(){
			return {
				arr : [],
			}
		},
		methods: {
			addnewusers: function(e){
				this.$dispatch('change_mode', 'add', 'Add New Users')
			}
		}
	}
</script>